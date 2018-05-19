<template>
    <div class="alert alert-warning col-md-9 mx-auto mt-30" v-if="!currentPosition && loading">
        Trying to access your location...
    </div>
    <div class="alert alert-info col-md-9 mx-auto mt-30" v-else-if="currentPosition && loading">
        Getting venues...
    </div>
    <div class="alert alert-danger col-md-9 mx-auto mt-30" v-else-if="!currentPosition && !loading">
        Unable display venues, please refresh your browser if this takes long
    </div>
</template>

<script>
	export default {
		name: 'InfoBoard',
        props: ['currentPosition','loading']
	}
</script>

<style scoped>

</style>
