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
    import axios from './helpers/axios';
    import {messages} from './helpers';
    import { getCurrentPosition } from './config';

	export default {
		name: 'App',
		components: {FilterBox, TopBar, VenueList, Wrapper, InfoBoard},
        created: async function() {
	        try{
		        // Get user current location for use in further requests
		        const position = await getCurrentPosition();
		        const  {latitude, longitude} = position.coords;
		        this.currentPosition =  {latitude, longitude};
		        // Update display message
		        this.updateMessage(messages.gettingVenues);
		        this.$Progress.start();

		        // Get venues around a user based on user location
		        const { venues } = await axios.get('/search', { params: {
				        ll: `${latitude},${longitude}`}
		        });
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
			updateMessage: function(message, alertClass='info') {
				this.message = message;
				this.alertClass = alertClass;
            },
	        onSearchFilter: async function(data) {
		        Object.assign(this.searchFilter, data);
		        try{
		        	this.venues = null;
			        this.updateMessage(messages.gettingVenues);
			        this.$Progress.start();
			        const  {latitude, longitude} = this.currentPosition;
			        const { venues } = await axios.get('/search', { params: {
			        	    ll: `${latitude},${longitude}`, ...data
			            }
			        });
			        this.updateMessage(!venues.length ? messages.noVenues : null);
			        this.$Progress.finish();
			        this.venues = [...venues];
		        } catch (e) {
			        this.$Progress.fail();
		        }
	        }
        }
	};
</script>
