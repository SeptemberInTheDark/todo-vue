<template>
    <div v-if="posts.length > 0">
        <transition-group name="post-list">
            <post-item 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
            >
        </post-item>
        </transition-group>
        
    </div>
    <h3 class="post__absent" v-else><strong>Список задач пуст</strong></h3>

</template>

<script>
import PostItem from "@/components/PostItem";
export default {
    components : {PostItem},
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.post__absent {
    margin: 0 auto;
    text-align: center;
    margin-top: 14px;
    border: 2px solid lightgray;
    max-width: 200px;
    padding: 20px;
    border-radius: 5px;

    color: lightgray;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>