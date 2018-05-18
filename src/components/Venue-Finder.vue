<template>
    <div class="wrapper flex-grow" v-on:new-search-filter="onNewSearchFilter">
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox></FilterBox>
        <VenueList></VenueList>
    </div>

</template>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
    $fa-font-path: '~font-awesome/fonts';
    @import '~font-awesome/scss/font-awesome.scss';
    @import "~bootstrap-select/sass/bootstrap-select.scss";
    @import '../assets/css/app.scss';
</style>
<script>
	import 'bootstrap-select/dist/js/bootstrap-select.min';
	import TopBar from './TopBar.vue';
	import FilterBox from './FilterBox.vue';
	import VenueList from './VenueList.vue';
	import axios from './axios';
	import { getCurrentPosition } from '../config';

	export default {
		name: 'Venue-Finder',
		components: {FilterBox, TopBar, VenueList},
		mounted: function () {
			$('[data-toggle=offcanvas]').click(function () {
				$('.offcanvas').toggleClass('active');
			});
			$('.close-filter').click(function () {
				$('.offcanvas').toggleClass('active');
			});
			this.$nextTick(() => {
				$('.selectpicker').selectpicker();
			});

			let positionSuccess = function(position){
				const {longitude, latitude} = position.coords;
				this.currentPosition = {longitude, latitude};
				console.log('currentPosition ', this.currentPosition);
			};

			positionSuccess = positionSuccess.bind(this);

			const positionFailure = function(error){
				console.log('error ', error);
			};

			getCurrentPosition().then(positionSuccess, positionFailure);

		},
		data() {
			return {
				currentPosition: null,
				venueTypes: [],
				message: 'Hello, Vue!'
			};
		},
		methods: {
			onNewSearchFilter: function (data) {
				Object.assign(this.searchFilter, data);
				console.log('Search filter from parent ', this.searchFilter);
			}
		}
	};
</script>
