<template>
    <div class="wrapper flex-grow">
        <TopBar></TopBar>
        <FilterBox></FilterBox>
        <VenueList></VenueList>
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
				$('.selectpicker').selectpicker();
			});
		},
		data() {
			return {
				venueTypes: [],
				message: 'Hello, Vue!'
			};
		}
	};
</script>
