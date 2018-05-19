<template>
    <Wrapper>
        <vue-progress-bar></vue-progress-bar>
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox :categories="venueCategories" @search-filter="onSearchFilter"></FilterBox>
        <InfoBoard :current-position="currentPosition" :loading="loading"></InfoBoard>
        <VenueList v-if="currentPosition" :venues="venues"></VenueList>
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
    import InfoBoard from './components/InfoBoard.vue';
    import axios from './axios';
    import { getCurrentPosition } from './config';
	export default {
		name: 'App',
		components: {FilterBox, TopBar, VenueList, Wrapper, InfoBoard},
		mounted() {
			const offCanvas = $('.offcanvas');
			$('[data-toggle=offcanvas]').click(() => offCanvas.toggleClass('active'));
			$('.close-filter').click(() => offCanvas.toggleClass('active'));
		},
        created: async function() {
	        try{
		        this.loading = true;

		        // Get user current location for use in further requests
		        const position = await getCurrentPosition();
		        const  {latitude, longitude} = position.coords;
		        this.currentPosition =  {latitude, longitude};
		        this.$Progress.start();

		        // Get venues around a user based on user location
		        const { venues } = await axios.get('/search', { params: {
				        ll: `${latitude},${longitude}`}
		        });
		        this.venues = venues;

		        // Get venue categories to enable user filter by venue type
		        const { categories } = await axios.get('/categories');
		        this.venueCategories = categories.map(({id, shortName}) => ({id, shortName}));

		        // Stop progress bar and loading indicator
		        this.$Progress.finish();
		        this.loading = false;

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
			        const { venues } = await axios.get('/search', { params: {
			        	    ll: `${latitude},${longitude}`, ...data
			            }
			        });
			        this.$Progress.finish();
			        this.venues = [...venues];
		        } catch (e) {
			        this.$Progress.fail();
			        console.log('error ', e.message);
		        }
	        }
        }
	};
</script>
