<template>
    <div class="wrapper flex-grow" v-on:new-search-filter="onNewSearchFilter">
        <TopBar :position="currentPosition"></TopBar>
        <FilterBox :categories="venueCategories"></FilterBox>
        <VenueList :venues="venues"></VenueList>
    </div>

</template>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
    $fa-font-path: '~font-awesome/fonts';
    @import '~font-awesome/scss/font-awesome.scss';
    @import "~bootstrap-select/sass/bootstrap-select.scss";
    @import './assets/css/app.scss';
</style>
<script>
	import 'bootstrap-select/dist/js/bootstrap-select.min';
	import TopBar from './components/TopBar.vue';
    import FilterBox from './components/FilterBox.vue';
    import VenueList from './components/VenueList.vue';
    import axios from './axios';
    import { getCurrentPosition } from './config';

	export default {
		name: 'App',
		components: {FilterBox, TopBar, VenueList},
		mounted: function () {
			$('[data-toggle=offcanvas]').click(function () {
				$('.offcanvas').toggleClass('active');
			});
			$('.close-filter').click(function () {
				$('.offcanvas').toggleClass('active');
			});
			this.$nextTick(() => {
				$('.selectpicker').selectpicker({size: 10, style: 'btn-secondary-outline'});
			});

			let positionSuccess = function(position){
				const {longitude, latitude} = position.coords;
				this.currentPosition = {longitude, latitude};
				return axios.get('/search', { params: {
					ll: `${this.currentPosition.latitude},
					    ${this.currentPosition.longitude}`}
				});
			};
			positionSuccess = positionSuccess.bind(this);

			let venuesSuccess = function(response){
                this.venues = response.venues;
                console.log('this.venues ', this.venues);
			};
			venuesSuccess = venuesSuccess.bind(this);

			const positionFailure = function(error){
				console.log('error ', error);
			};

			getCurrentPosition().then(positionSuccess).then(venuesSuccess, positionFailure);

		},
        created() {
			console.log('sending req');
			let getCategoriesSuccess = function(response) {
				this.venueCategories = response['categories']
					.map(({id, shortName}) => ({id, shortName}));
				console.log('this.venueCategories ', this.venueCategories);
            };
			getCategoriesSuccess = getCategoriesSuccess.bind(this);


	        axios.get('/categories')
                .then(getCategoriesSuccess, function (error) {
                    console.log('error ', error);
                });
        },
		data() {
			return {
				currentPosition: null,
				venueCategories: [],
				venues: [],
				message: 'Hello, Vue!'
			};
		},
        methods: {
	        onNewSearchFilter(data) {
		        console.log('new data');
		        Object.assign(this.searchFilter, data);
		        console.log('Search filter from parent ', this.searchFilter);
	        }
        }
	};
</script>
