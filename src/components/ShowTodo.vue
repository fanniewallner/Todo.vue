<script setup lang="ts">
import { Todo } from '../models/Todo';

interface IShowTodoProps {
    todo: Todo
}

defineProps<IShowTodoProps>()
defineEmits(["toggleTodo", "removeTodo"])
</script>

<template>
    <div class="todo">
        <input type="checkbox" :checked="todo.isDone" @change="$emit('toggleTodo')" />
        <span :class="{ done: todo.isDone }"> {{ todo.description }} </span>
        <button @click="() => $emit('removeTodo', todo)">Delete</button>
    </div>
</template>

<style scoped>
.todo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.done {
    text-decoration: line-through;
}
</style>