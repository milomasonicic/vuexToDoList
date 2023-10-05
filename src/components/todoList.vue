<template>

    <div v-for="todo in allTodos" :key="todo.id">
        <todoItem :todo="todo"/>
    </div>
</template>
    
<script>

import todoItem from './todoItem.vue'
import { mapGetters } from 'vuex'

export default{

    components:{
        todoItem
    }, 
    computed:{
        ...mapGetters(["allTodos"])
    }
}
    
</script>
    
<style>
    
</style>