<template>
  <div class="p-[5vh] min-h-screen w-80 bg-[#f7f9fc]">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>

