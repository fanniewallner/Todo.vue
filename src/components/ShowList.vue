<script setup lang="ts">
import AddTodo from './AddTodo.vue';
import { Todo } from '../models/Todo';
import { ref } from 'vue';
import ShowTodo from './ShowTodo.vue';

const todos = ref<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"))

const addTodo = (description: string) => {
    console.log(description)
    todos.value.push(new Todo(description, false))
    console.log(todos.value)
}

const handleToggle = (i: number) => {
    todos.value[i].isDone = !todos.value[i].isDone
    //todos.value[i].isDone = !todos.value[i].isDone
};

function saveTasksToLS(tasks: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(tasks))
}

const removeTodo = (i: number) => {
    todos.value.splice(i, 1)
}
</script>

<template>
    <div id="todoApp">
        <div id="todos">
            <AddTodo @add-todo="addTodo"></AddTodo>
            <ShowTodo :todo="todo" v-for="(todo, index) in todos" @toggleTodo="() => handleToggle(index)"
                @removeTodo="() => removeTodo(index)" :key="index">
            </ShowTodo>
        </div>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
}
</style>