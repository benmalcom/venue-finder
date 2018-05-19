<template>
    <div class="alert alert-warning col-md-9 mx-auto text-sm mt-2">
        {{message}}
    </div>
</template>

<script>
	export default {
		name: 'InfoBoard',
        props: ['message']
	}
</script>
