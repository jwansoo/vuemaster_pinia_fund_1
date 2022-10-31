<template>
  <form class="mb-4" @submit.prevent="addItemAndClear(todo)">
    <input class="mt-6 mb-4 h-5 w-[50%]" v-model="todo" type="text" />
    <button class="ml-7 bg-[#2f6089] py-2 px-3 border-none rounded-md font-extrabold text-white w-[20%] ">Add</button>
  </form>
</template>

<script setup>
import {ref} from 'vue'
import { useTodoListStore } from '../stores/todoList';
const store=useTodoListStore()
const todo=ref('')

function addItemAndClear(item){
  if(item.length===0){
    return
  }
  store.addTodo(item)
  todo.value=''
}
</script>

<style lang="scss" scoped>

</style>