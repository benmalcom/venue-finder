<template>
    <div class="col-md-4 col-sm-6">
        <div class="row venue-item col-sm-12 col-12 text-right shadow">
            <div class="col-md-3 col-3 center-content">
                <div class="ml-auto circle circle-md center-content business-image-placeholder">
                    <img src="../assets/images/venue-marker.png" class="marker-image">
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
                    <span class="badge badge-secondary text-white" v-if="getCategory(venue)">
                        {{ getCategory(venue).name }}
                    </span>
                    <span class="badge badge-warning text-white" v-else>Not Available</span>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
			getFormattedAddress(location){
                let address = "";
			    if(location.formattedAddress && location.formattedAddress.length) {
					address = location.formattedAddress[0];
				}
				else if (location.address || location.city || location.city || location.country) {
                	address += location.address ? `,${location.address}` : '';
                	address += location.city ? `,${location.city}` : '';
                	address += location.state ? `,${location.state}` : '';
                	address += location.country ? `,${location.country}` : '';
                } else {
					address = "Not available";
                }
                return address;
            },
            getCategory(venue){
                return venue.categories &&  venue.categories.length ? venue.categories[0] : null;
            }
        }
	}
</script>

<style scoped>

</style>
