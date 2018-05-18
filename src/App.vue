<template>
    <Wrapper>
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox :categories="venueCategories" @search-filter="onSearchFilter"></FilterBox>
        <VenueList v-if="currentPosition" :venues="venues"></VenueList>
        <div class="alert alert-warning col-md-9 mx-auto mt-30" v-if="!currentPosition && !positionEnabled">
            Trying to access your location...
        </div>
        <div class="alert alert-danger col-md-9 mx-auto mt-30" v-else-if="!currentPosition && positionEnabled">
            Unable to get your location to display venues
        </div>
    </Wrapper>
</template>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
    $fa-font-path: '~font-awesome/fonts';
    @import '~font-awesome/scss/font-awesome.scss';
    // @import "~bootstrap-select/sass/bootstrap-select.scss";
    @import './assets/css/app.scss';
</style>
<script>
	// import 'bootstrap-select/dist/js/bootstrap-select.min';
	import TopBar from './components/TopBar.vue';
    import FilterBox from './components/FilterBox.vue';
    import VenueList from './components/VenueList.vue';
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
            // $('.selectpicker').selectpicker({size: 10, style: 'btn-secondary-outline'});

		},
        created: async function() {
	        try{
		        const position = await getCurrentPosition();
		        const  {latitude, longitude} = position.coords;
		        this.currentPosition =  {latitude, longitude};


		        let response = await axios.get('/search', { params: {
				        ll: `${latitude},${longitude}`}
		        });
		        this.venues = response.venues;


		        response = await axios.get('/categories');
		        const { categories } = response;
		        console.log('categories ', categories);
		        this.venueCategories = categories.map(({id, shortName}) => ({id, shortName}));

	        } catch (e) {
		        console.log('error ', e.message);
	        }
        },
		data() {
			return {
				currentPosition: null,
				positionEnabled: true,
				searchFilter: {},
				venueCategories: [],
				venues: []
			};
		},
        methods: {
	        onSearchFilter: async function(data) {
		        Object.assign(this.searchFilter, data);
		        try{
			        const  {latitude, longitude} = this.currentPosition;
			        const response = await axios.get('/search', { params: {
			        	    ll: `${latitude},${longitude}`, ...data
			            }
			        });
			        this.venues = [...response.venues];
		        } catch (e) {
			        console.log('error ', e.message);
		        }
	        }
        }
	};
</script>
