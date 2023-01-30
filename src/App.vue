
<template>
  <div class="wrapper">
       <form 
       class="todo-form"
       >

        <div class="todo">
          <header class="todo__header">
            <h1 class="todo__title">
              To Do App
            </h1>

            <div class="todo-add-items">
              
              <add-input 
              type="text" 
              placeholder="Some words" 
              :modelValue="title"
              :keypress.enter="createPost"
              @input="title = $event.target.value"
              />

              <add-button
              @click.prevent="createPost">
                <i class="fa-solid fa-plus fa-lg"></i>
              </add-button>

            </div>
            <hr class="todo__hr">
          </header>
          
          <post-list :posts="posts"/>
          
          
        </div>
       </form>
  </div>
</template>

<script>


import PostList from "@/components/PostList";
import axios from 'axios';

export default {
  components: {
    PostList,
  },

  data() {
    return {
      // Тестовые /моковые значения
      posts: [
        // {id:1, title: 'Create a new design', done:true},
        // {id:2, title: '', done:false},
        // {id:3, title: '', done:false},
      ],
      title: '',
      
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        done: false
      }
      if(this.title.trim() ==='') { return }
      
      this.posts.push(newPost);
      this.title = '';
      
    },

    async getData() {
      try {
        // здесь должен быть url сервера
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3'); 
        this.posts = response.data;
        console.log(response);
       
      } catch (error) {
        alert('Ошибка')
      }
    },
    // removePost(indx) {
    //   this.posts.splice(indx, 1);
    // }
  },
  mounted() {
    this.getData();
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.wrapper {
    max-width: $desktopWidth;
    width: 100%;
  }


.todo {

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    color: #112D4E;
  }

  &__hr {
    max-width: 500px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

}

i.fa-plus{
    color: #fff;
}

@media(max-width: 768px) {


    .todo__hr {
        max-width: 320px;
    }
}

</style>