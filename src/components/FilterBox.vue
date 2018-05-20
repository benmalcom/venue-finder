<template>
    <div class="container-fluid offcanvas">
        <div class="row sidebar-offcanvas">
            <div class="shadow col-md-9 mx-auto bg-white white-overlay br-5 pt-5">
                <a class="btn d-sm-none text-muted close-filter pl-0"><i class="fa fa-times"></i></a>
                <form v-on:submit.prevent="applyFilter(searchFilter)">
                    <div class="row">
                        <div class="col-md-1 col-12 d-flex align-items-center">
                            <p class=""><strong>Filter</strong></p>
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>LOCATION</strong></label>
                            <input type="text" v-model="searchFilter.query"
                                   class="form-control mb-2 input-custom white"
                                   placeholder="E.g London business school">
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>WITHIN</strong></label>
                            <select class="shadow-lite mb-2 form-control text-sm" v-model="searchFilter.radius">
                                <option :value=null disabled selected>-- Select radius --</option>
                                <option :value=null>Anywhere around</option>
                                <option v-for="distance in distances" v-bind:value="distance.value">
                                    {{distance.label}}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="text-muted text-sm"><strong>VENUE TYPE</strong></label>
                            <select class="shadow-lite mb-2 form-control text-sm" v-model="searchFilter.categoryId">
                                <option :value=null disabled selected>-- Select category --</option>
                                <option v-for="category in categories" v-bind:value="category.id">{{category.shortName}}</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-12 mt-30">
                            <button type="submit" class="btn btn-custom btn-block close-filter">Apply</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'underscore';
    import distances from '../json/distances';
	export default {
		name: 'FilterBox',
        props: ['categories'],
        data() {
            return {
            	distances,
            	searchFilter: {query: null, radius: null, categoryId: null}
            }
        },
        methods: {
	        /**
             * @function Get's the applied filter and emits as an object to the parent component (Wrapper)
	         * @param data the searchFilter data property bound to the filter form
	         */
			applyFilter(data){
				const obj = _.pick(data, function(value, key, object) {
					return value !=null;
				});
                if (!_.isEmpty(obj)) {
	                this.$emit('search-filter', obj);
                }
            }
        }
	}
</script>

<style scoped>
</style>
