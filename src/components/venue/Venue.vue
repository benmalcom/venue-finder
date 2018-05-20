<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="row venue-item col-sm-12 col-12 text-right shadow-lite">
            <div class="col-md-3 col-3 center-content">
                <div class="circle circle-md center-content">
                    <img src="../../assets/images/venue-marker.png" class="marker-image">
                </div>
            </div>
            <div class="col-md-9 col-9 center-content">
                <div class="mr-auto text-left">
                    <h6 class="mb-1 mt-1">
                        <strong class="name">
                            {{venue.name.length > 40 ? `${venue.name.substring(0,39)}...` : venue.name}}
                        </strong>
                    </h6>
                    <h6 class="text-xs text-muted address">
                        {{getFormattedAddress(venue.location)}}
                    </h6>
                    <label class="badge badge-secondary text-white text-xs category" v-if="getCategory(venue)">
                        <i class="fa fa-tags"></i> {{ getCategory(venue).name }}
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
