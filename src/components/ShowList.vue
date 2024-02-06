<script setup lang="ts">
import AddTodo from './AddTodo.vue';
import { Todo } from '../models/Todo';
import { ref } from 'vue';
import ShowTodo from './ShowTodo.vue';

const todos = ref<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"))

const addTodo = (description: string) => {
    todos.value.push(new Todo(description, false))
    saveTodosToLS(todos.value)
}

const handleToggle = (i: number) => {
    todos.value[i].isDone = !todos.value[i].isDone
    saveTodosToLS(todos.value)
};

function saveTodosToLS(tasks: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(tasks))
}

const removeTodo = (i: number) => {
    todos.value.splice(i, 1)
    saveTodosToLS(todos.value)
}
</script>

<template>
    <div id="todoApp">
        <AddTodo @add-todo="addTodo"></AddTodo>
        <div id="todos">
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