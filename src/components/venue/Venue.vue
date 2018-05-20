<template>
    <div class="col-md-4 col-sm-6">
        <div class="row venue-item col-sm-12 col-12 text-right shadow-lite">
            <div class="col-md-3 col-3 center-content">
                <div class="ml-auto circle circle-md center-content business-image-placeholder">
                    <!--<img v-bind:src="photo" v-if="photo"
                          class="marker-image">-->
                    <img src="../../assets/images/venue-marker.png" class="marker-image">
                </div>
            </div>
            <div class="col-md-9 col-9 center-content pl-0">
                <div class="mr-auto text-left">
                    <h6 class="mb-1 mt-1 text-md">
                        <strong>
                            {{venue.name.length > 25 ? `${venue.name.substring(0,26)}...` : venue.name}}
                        </strong>
                    </h6>
                    <h6 class="text-sm text-muted">
                        {{getFormattedAddress(venue.location)}}
                    </h6>
                    <label class="badge badge-secondary text-white text-xs" v-if="getCategory(venue)">
                        <i class="fa fa-tags"></i> {{ getCategory(venue).name }}
                    </label>
                    <label class="badge badge-warning text-white text-xs" v-else><i class="fa fa-tags"></i> Not Available</label>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getCategory, getFormattedAddress } from '../../helpers';
	export default {
		name: 'Venue',
        props: ['venue'],
        data(){
			return {
			    category: null,
                address: null,
                photo: null,
            };
        },
        methods: {
			getFormattedAddress,
            getCategory
        }
	}
</script>
