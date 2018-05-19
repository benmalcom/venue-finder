<template>
    <Wrapper>
        <vue-progress-bar></vue-progress-bar>
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox :categories="venueCategories" @search-filter="onSearchFilter"></FilterBox>
        <VenueList v-if="currentPosition" :venues="venues"></VenueList>
        <div class="alert alert-warning col-md-9 mx-auto mt-30" v-if="!currentPosition && loading">
            Trying to access your location...
        </div>
        <div class="alert alert-info col-md-9 mx-auto mt-30" v-else-if="currentPosition && loading">
            Getting venues...
        </div>
        <div class="alert alert-danger col-md-9 mx-auto mt-30" v-else-if="!currentPosition && !loading">
            Unable display venues, please refresh your browser if this takes long
        </div>
    </Wrapper>
</template>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
    $fa-font-path: '~font-awesome/fonts';
    @import '~font-awesome/scss/font-awesome.scss';
    @import './assets/css/app.scss';
</style>
<script>
	import TopBar from './components/TopBar.vue';
    import FilterBox from './components/FilterBox.vue';
    import VenueList from './components/venue/VenueList.vue';
    import Wrapper from './components/Wrapper.vue';
    import axios from './axios';
    import { getCurrentPosition } from './config';
	export default {
		name: 'App',
		components: {FilterBox, TopBar, VenueList, Wrapper},
		mounted: function () {
			$('[data-toggle=offcanvas]').click(function () {
				$('.offcanvas').toggleClass('active');
			});
			$('.close-filter').click(function () {
				$('.offcanvas').toggleClass('active');
			});
		},
        created: async function() {
	        try{
		        this.$Progress.start();
		        this.loading = true;
		        const position = await getCurrentPosition();
		        const  {latitude, longitude} = position.coords;
		        this.currentPosition =  {latitude, longitude};


		        let response = await axios.get('/search', { params: {
				        ll: `${latitude},${longitude}`}
		        });
		        this.venues = response.venues;

		        response = await axios.get('/categories');
		        this.$Progress.finish();
		        this.loading = false;
		        const { categories } = response;
		        console.log('categories ', categories);
		        this.venueCategories = categories.map(({id, shortName}) => ({id, shortName}));

	        } catch (e) {
		        this.$Progress.fail();
		        this.loading = false;
		        console.log('error ', e.message);
	        }
        },
		data() {
			return {
				currentPosition: null,
				loading: false,
				searchFilter: {},
				venueCategories: [],
				venues: []
			};
		},
        methods: {
	        onSearchFilter: async function(data) {
		        Object.assign(this.searchFilter, data);
		        try{
			        this.$Progress.start();
			        const  {latitude, longitude} = this.currentPosition;
			        const response = await axios.get('/search', { params: {
			        	    ll: `${latitude},${longitude}`, ...data
			            }
			        });
			        this.$Progress.finish();
			        this.venues = [...response.venues];
		        } catch (e) {
			        this.$Progress.fail();
			        console.log('error ', e.message);
		        }
	        }
        }
	};
</script>
