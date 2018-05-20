<template>
    <Wrapper>
        <vue-progress-bar></vue-progress-bar>
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox :categories="venueCategories" @search-filter="onSearchFilter"></FilterBox>

        <InfoBoard v-if="message" :message="message" alert-class=""></InfoBoard>

        <VenueList v-if="venues" :venues="venues"></VenueList>
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
    import axios, {updateAxiosParams} from './helpers/axios';
    import {messages} from './helpers';
    import { getCurrentPosition } from './config';

	export default {
		name: 'App',
		components: {FilterBox, TopBar, VenueList, Wrapper, InfoBoard},
		/**
         * 1. Component hook starts by getting current user's position (lat, long) to be used in requests.
         * 2. The axios request config object is updated with the new position (query params)
         * 3. Get venues based on this user location
         * 4. Also get venue categories independently. For filters.
         * 5. In each request state the user is updated via the updateMessage method
		 * @return {Promise<void>}
		 */
		created: async function() {
	        try{
		        // Get user current location for use in further requests
		        const position = await getCurrentPosition();
		        const  {latitude, longitude} = position.coords;
		        // Update axios (http library) query parameter to use the current position (latitude and longitude)
                // To be used in subsequent requests
                updateAxiosParams({ ll: `${latitude},${longitude}`});
                // Set value of user's current position
		        this.currentPosition =  {latitude, longitude};
		        // Update display message
		        this.updateMessage(messages.gettingVenues);
		        this.$Progress.start();


		        // Get venues around a user based on user location
		        const { venues } = await axios.get('/search');
		        this.venues = venues;
		        // Update display message
		        this.updateMessage(null);

		        // Get venue categories to enable user filter by venue type
		        const { categories } = await axios.get('/categories');
		        this.venueCategories = categories.map(({id, shortName}) => ({id, shortName}));

		        // Stop progress bar and loading indicator
		        this.$Progress.finish();

	        } catch (e) {
		        // Update display message
		        this.updateMessage(messages.noLocationOrRefresh, 'warning');
		        this.$Progress.fail();
		        console.log('error ', e.message);
	        }
        },
		data() {
			return {
				currentPosition: null,
				searchFilter: {},
				venueCategories: [],
				venues: null,
                message: messages.accessingLocation,
                alertClass: 'info'
			};
		},
        methods: {
	        /**
             * @function updateMessage
	         * @param message The message to be displayed to the user
	         * @param alertClass the option class to be attached to the InfoBoard div child
	         */
			updateMessage: function(message, alertClass='info') {
				this.message = message;
				this.alertClass = alertClass;
            },
	        /**
             * @function onSearchFilter, executed when a new search filter is received from child component, FilterBar
	         * @param data
	         * @return {Promise<void>}
	         */
	        onSearchFilter: async function(data) {
		        Object.assign(this.searchFilter, data);
		        try{
		        	this.venues = null;
			        this.updateMessage(messages.gettingVenues);
			        this.$Progress.start();
			        const { venues } = await axios.get('/search', { params: {...data } });
			        // Update user on the request result
			        this.updateMessage(!venues.length ? messages.noVenues : null);
			        this.$Progress.finish();
			        this.venues = [...venues];
		        } catch (e) {
			        // Update user on the request result
			        this.updateMessage('Error getting venues please refresh browser ', 'danger');
			        this.$Progress.fail();
		        }
	        }
        }
	};
</script>
