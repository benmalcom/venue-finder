<template>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="row venue-item shadow-lite">
            <div class="col-md-4 col-4 full-height full-width p-0">
                    <img src="../../assets/images/venue-marker.png" class="marker-image full-height full-width">
            </div>
            <div class="col-md-8 col-8 pt-30">
                <div class="mr-auto text-left">
                    <h6 class="mb-1 mt-1">
                        <strong class="name">
                            {{venue.name.length > 40 ? `${venue.name.substring(0,37)}...` : venue.name}}
                        </strong>
                    </h6>
                    <h6 class="text-sm text-muted address">
                        {{getFormattedAddress(venue.location)}}
                    </h6>
                    <label class="badge badge-secondary text-white text-xs category" v-if="getCategory(venue)">
                        <i class="fa fa-tags"></i> {{ getCategory(venue) }}
                    </label>
                    <label class="badge badge-warning text-white text-xs category" v-else><i class="fa fa-tags"></i> Not Available</label>

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
            };
        },
        methods: {
			getFormattedAddress,
            getCategory
        }
	}
</script>
