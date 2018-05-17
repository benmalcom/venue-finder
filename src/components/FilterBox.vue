<template>
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
</template>

<script>
	export default {
		name: 'FilterBox'
	}
</script>

<style scoped>

</style>
