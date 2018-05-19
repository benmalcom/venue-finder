<template>
    <transition name="fadeUp" enter-active-class="fadeUp">

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
    </transition>
</template>

<style lang="scss">
    $animationDuration: 0.5s; // specify animation duration. Default value: 1s
    @import "~vue2-animate/dist/vue2-animate.min.css";
</style>

<script>
    import axios from '../../axios';
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
        created(){
		    this.getPhoto(this.venue);
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
            },
	        getPhoto(venue){
		        axios.get(`${venue.id}/photos`)
			        .then((response) =>{
                        const item = response['photos']['items'][0];
				        if(item) {
					        this.photo = `${item.prefix}original${item.suffix}`;
                        }
			        }, (error) => console.log('error ', error));
	        }
        }
	}
</script>
