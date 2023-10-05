<template>
    <div>
        
        <h3 v-if="!editing">{{todo.title}}</h3>
        <input v-bind:value="todoText" @change="todoTextChange" type="text" v-else>
        <button @click="updateTodo(todo)">{{ editing? 'Update': 'Edit' }}</button>
        <button @click="handleDeleteTodo(todo.id)"> delete</button>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default{
    props:{
        todo:{}
    }, 
    data(){
        return{
            todoText: "",
            editing:false
        }
    },
    methods:{
        ...mapActions(['deleteTodo','updateTodo' ]),
        todoTextChange(e){
            this.todoText = e.target.value

        },
        handleDeleteTodo(){
            this.deleteTodo(this.todo.id)
        },
        updateTodo(todo){
            this.editing = !this.editing /*== true ? false : true*/
            console.log(this.editing)
            if(this.editing){
                this.todoText = todo.title
                this.$store.dispatch('updateTodo', { id: todo.id, title: this.todoText})
            } else {
                todo.title = this.todoText
            }
        }
    }
}

</script>

<style>

</style>