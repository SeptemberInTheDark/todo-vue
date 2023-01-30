<template>
   <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>


<script>

export default {
    name: 'add-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.input {
    background-color: $inputBackground;
    border-top-left-radius: $input-radius;
    border-bottom-left-radius: $input-radius;

    padding: 10px 0 10px 11px;
    margin-bottom: 16px;
    outline: none;
    border: 1px solid rgba(177, 177, 177, 0.4);
}
</style>