<template>
    <div v-bind:class="infoBoardClass">
        {{message}}
    </div>
</template>

<script>
	export default {
		name: 'InfoBoard',
        props: ['message', 'alert-class'],
        data(){
			return {
				infoBoardClass: `alert alert-${this.alertClass} col-md-9 mx-auto text-sm mt-2`
            }
        },
        watch: {
			alertClass(value) {
				return value;
            }
        }
	}
</script>
