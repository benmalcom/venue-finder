<template>
    <div class="wrapper flex-grow">
        <div class="container-fluid top-bar">
            <div class="row col-md-9 mx-auto top-bar-inner">
                <div class="col-md-6 d-flex align-items-center">
                    <h6 class="text-left text-white">VENUE <strong>FINDER</strong></h6>
                </div>
                <div class="offset-md-3 col-md-3 mt-3 d-flex align-items-center">
                    <div class="media">
                        <label class="mr-3 text-white"><i class="fa fa-map-marker-alt fa-2x"></i></label>
                        <div class="media-body text-white">
                            <h5 class="text-sm mb-0">Cras purus odio, vestibulum in vulputate.</h5>
                            <p class="text-xs current-location mt-0">Current location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid offcanvas">
            <div class="row sidebar-offcanvas">
                <div class="shadow col-md-9 mx-auto bg-white white-overlay br-5 pt-5">
                    <a class="btn d-sm-none text-danger close-filter pl-0"><i class="fa fa-times"></i></a>
                    <form>
                        <div class="row">
                            <div class="col-md-1 col-12 d-flex align-items-center">
                                <p class=""><strong>Filter</strong></p>
                            </div>
                            <div class="col-md-3">
                                <label class="text-muted text-sm"><strong>LOCATION</strong></label>
                                <input type="text" class="form-control mb-2 input-custom white"  placeholder="Type location here">
                            </div>
                            <div class="col-md-3">
                                <label class="text-muted text-sm"><strong>RADIUS</strong></label>
                                <select class="form-control shadow-lite mb-2 selectpicker">
                                    <option value="">-- select --</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="text-muted text-sm"><strong>VENUE TYPE</strong></label>
                                <select class="form-control shadow-lite mb-2 selectpicker">
                                    <option value="">-- select --</option>
                                </select>
                            </div>

                            <div class="col-md-2 col-12 mt-30">
                                <button type="submit" class="btn btn-custom btn-block close-filter">Update</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <div class="col-md-11 mx-auto mt-30 pl-1">
            <a class="btn btn-sm btn-filter btn-outline-secondary d-sm-none mb-3" data-toggle="offcanvas"><i class="fa fa-filter"></i> Filter</a>
            <h5 class="ml-2"><strong>Available Venues</strong></h5>
            <div class="row p-0">
                <div class="col-md-4 col-sm-6">
                    <div class="row venue-item col-sm-12 col-12 text-right shadow">
                        <div class="col-md-3 col-3 center-content">
                            <div class="ml-auto circle circle-md center-content business-image-placeholder">
                                <img class="marker-image" src="./assets/images/venue-marker.png">
                            </div>
                        </div>
                        <div class="col-md-9 col-9 center-content pl-0">
                            <div class="mr-auto text-left">
                                <h6 class="mb-1 mt-1 text-md">
                                    <strong>
                                        Krispy Kreme Doughnut
                                    </strong>
                                </h6>
                                <h6 class="text-sm text-muted">
                                    174/194 Obafemi Awolowo way,
                                    Alausa, Ikeja, Lagos state.
                                </h6>
                                <span class="badge badge-success">STORE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="row venue-item col-sm-12 col-12 text-right shadow">
                        <div class="col-md-3 col-3 center-content">
                            <div class="ml-auto circle circle-md center-content business-image-placeholder">
                                <img class="marker-image" src="./assets/images/venue-marker.png">
                            </div>
                        </div>
                        <div class="col-md-9 col-9 center-content pl-0">
                            <div class="mr-auto text-left">
                                <h6 class="mb-1 mt-1 text-md">
                                    <strong>
                                        Victoria's Secret
                                    </strong>
                                </h6>
                                <h6 class="text-sm text-muted">
                                    174/194 Obafemi Awolowo way,
                                    Alausa, Ikeja, Lagos state.
                                </h6>
                                <span class="badge badge-warning text-white">SALON</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row venue-item col-sm-12 col-12 text-right shadow">
                        <div class="col-md-3 col-3 center-content">
                            <div class="ml-auto circle circle-md center-content business-image-placeholder">
                                <img src="./assets/images/venue-marker.png" class="marker-image">
                            </div>
                        </div>
                        <div class="col-md-9 col-9 center-content pl-0">
                            <div class="mr-auto text-left">
                                <h6 class="mb-1 mt-1 text-md">
                                    <strong>
                                        Krispy Kreme Doughnut
                                    </strong>
                                </h6>
                                <h6 class="text-sm text-muted">
                                    174/194 Obafemi Awolowo way,
                                    Alausa, Ikeja, Lagos state.
                                </h6>
                                <span class="badge badge-primary">STORE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row venue-item col-sm-12 col-12 text-right shadow">
                        <div class="col-md-3 col-3 center-content">
                            <div class="ml-auto circle circle-md center-content business-image-placeholder">
                                <img src="./assets/images/venue-marker.png" class="marker-image">
                            </div>
                        </div>
                        <div class="col-md-9 col-9 center-content pl-0">
                            <div class="mr-auto text-left">
                                <h6 class="mb-1 mt-1 text-md">
                                    <strong>
                                        Victoria's Secret
                                    </strong>
                                </h6>
                                <h6 class="text-sm text-muted">
                                    174/194 Obafemi Awolowo way,
                                    Alausa, Ikeja, Lagos state.
                                </h6>
                                <span class="badge badge-danger text-white">NIGHTCLUB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    $fa-font-path: '../node_modules/font-awesome/fonts';
    @import '../node_modules/font-awesome/scss/font-awesome.scss';
    @import './assets/css/app.scss';
</style>
<script>
	export default {
		name: 'App',
		data() {
			return {
				message: 'Hello, Vue!'
			};
		}
	};
</script>
