import './assets/main.css'
import { createStore } from 'vuex'

import { createApp } from 'vue'
import App from './App.vue'

const store = createStore({
    state () {
      return {
        todos: [
            {id:1, title: 'text1'},
            {id:2, title: 'text2'},
            {id:3, title: 'text3'},
        ]
      }
    },

    getters: {
        allTodos: (state) => state.todos,
    },
    actions: {
        addTodo({ commit }, todo) {
            commit("add_todo", todo)
        }, 
        deleteTodo({commit},id){
            commit("delete_todo", id)
        }, 
        updateTodo({commit}, {id, title}){
            commit ('update_todo', {id, title})
        }
    },
    mutations: {
      add_todo (state, todo) {
        state.todos.push(todo)
        console.log(todo)
      },
      delete_todo (state, id) {
        state.todos = state.todos.filter(todo => todo.id != id)
        console.log(todo)
      }, 
      update_todo(state, {id, title}){
        let todoToUpdate = state.todos.find(t => t.id == todo.id)
        if(todoToUpdate){
            todoToUpdate.title = title
        }
      }
    },
    modules:{},
  })

const app = createApp(App)
app.use(store)
app.mount('#app')
