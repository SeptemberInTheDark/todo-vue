<template >
    <button class="btn btn-add">
        <slot></slot>
    </button>
</template>

<script>


export default {
    name: 'add-button'
}

</script>


<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.btn {
    border: 1px solid $bgColor;
    min-width: 45px;
    min-height: 32px;
}
.btn-add {
    padding: 10px 22px;
    border-top-right-radius: $input-radius;
    border-bottom-right-radius: $input-radius;
    background-color: $bgColor;
}


</style>