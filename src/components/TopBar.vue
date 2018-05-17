<template>
    <div class="container-fluid top-bar">
        <div class="row col-md-9 mx-auto top-bar-inner">
            <div class="col-md-6 d-flex align-items-center">
                <h6 class="text-left text-white">VENUE <strong>FINDER</strong></h6>
            </div>
            <div class="offset-md-3 col-md-3 mt-3 d-flex align-items-center">
                <div class="media">
                    <label class="mr-2 text-white"><i class="fa fa-map-marker fa-2x"></i></label>
                    <div class="media-body text-white">
                        <h5 class="text-sm mb-0">Cras purus odio, vestibulum in vulputate.</h5>
                        <p class="text-xs current-location mt-0">Current location</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'TopBar',
        props: {

        },
        data: function () {
            return {

            }
        }
	}
</script>

<style scoped>

</style>
