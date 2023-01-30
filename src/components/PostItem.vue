<template>
    <section class="post">
        <div class="post__item"
            :class="{done: post.done}"
            >

            <input 
                type="checkbox" 
                class="post__checkbox" 
                id="todo-check" 
                name="todo-check" 
                v-model="post.done"
            />

            <label for="todo-check"></label>
            <span class="post__title">{{ post.title }}</span>
        
        </div>
    </section>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.post {
    padding: 14px 55px;

    &__item {
        position: relative;
        max-width: 490px;
        min-height: 55px;
        background-color: #DBE2EF;
        border-radius: 5px;
        border: none;
        text-align: center;
        padding: 20px;
        display: flex;
        align-items: center;
    }


    &__title {
        margin: 0 auto;
    }

}

.done {
      background-color: #66d382;
      opacity: 0.5;
}

</style>