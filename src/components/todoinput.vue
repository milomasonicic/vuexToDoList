<template>

<h1>Todo input</h1>
<input type="text" v-model="todoText">
<button @click="addTodoI(todoText)">add</button>
</template>

<script>

import { mapActions } from "vuex"
import { v1 } from "uuid"

export default {

    data(){
        return{
           todoText: " " 
        }
    },

    methods: {
        ...mapActions(["addTodo"]),
        addTodoI(){
            this.addTodo({
                id:v1(),
                title: this.todoText
            })
        }
    }
}

</script>

<style>

</style>