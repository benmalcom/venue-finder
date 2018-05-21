<template>
    <div v-bind:class="infoBoardClass">
        {{message}}
    </div>
</template>

<script>
	export default {
		name: 'InfoBoard',
        props: ['message', 'alertClass'],
        data(){
			return {
				infoBoardClass: `alert alert-${this.alertClass} col-md-9 mx-auto text-sm mt-2`
            }
        }
	}
</script>
