<template>
    <div class="container-fluid offcanvas">
        <div class="row sidebar-offcanvas">
            <div class="shadow col-md-9 mx-auto bg-white white-overlay br-5 pt-5">
                <a class="btn d-sm-none text-muted close-filter pl-0"><i class="fa fa-times"></i></a>
                <form v-on:submit.prevent="applyFilter()">
                    <div class="row">
                        <div class="col-md-1 col-12 d-flex align-items-center">
                            <p class=""><strong>Filter</strong></p>
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>LOCATION</strong></label>
                            <input type="text" v-model="searchFilter.location" class="form-control mb-2 input-custom white"  placeholder="Type location here">
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>RADIUS</strong></label>
                            <select class="shadow-lite mb-2 form-control" v-model="searchFilter.radius">
                                <option value="">-- select --</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>VENUE TYPE</strong></label>
                            <select class="shadow-lite mb-2 form-control" v-model="searchFilter.venue_type">
                                <option value=''>-- select --</option>
                                <option v-for="category in categories" :value="category.id">{{category.shortName}}</option>
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
		name: 'FilterBox',
        props: ['categories'],
        created(){
		    console.log('categories created', this.categories);
        },
        data: function () {
            return {
            	searchFilter: {location: null, radius: null, venue_type: null}
            }
        },
        methods: {
			applyFilter(){
				console.log('Filter applied ', this.searchFilter);
				if(this.searchFilter.location ||
                    this.searchFilter.radius ||
                    this.searchFilter.venue_type) {
					console.log('emitting ');
					this.$emit('new-search-filter', this.searchFilter);
                }
            }
        }
	}
</script>

<style scoped>
.selectpicker{
    border-radius: 5px !important;
}
</style>
