<template>
    <div class="col-md-11 mx-auto mt-30 pl-1">
        <a class="btn btn-sm btn-filter btn-outline-secondary d-sm-none mb-3"
           data-toggle="offcanvas">
            <i class="fa fa-filter"></i> Filter</a>
        <h5 class="ml-2" v-if="venues && venues.length"><strong>Available Venues</strong></h5>
        <div class="row p-0">
            <Venue v-for="(value,key) in venues" :venue="value" :key="key"></Venue>
        </div>
    </div>
</template>

<script>
    import Venue from './Venue.vue';
    import $ from 'jquery';
	export default {
		name: 'VenueList',
        props: ['venues'],
		mounted() {
			// Bind mobile toggling click events for filter
			$('[data-toggle=offcanvas]').click(() => $('.offcanvas').toggleClass('active'));
			$('.close-filter').click(() => $('.offcanvas').toggleClass('active'));
		},
        components: {Venue}
	}
</script>

<style scoped>

</style>
