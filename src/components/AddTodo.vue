<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const description = ref("")
const emit = defineEmits(["addTodo"]);
const addTodo = () => {
    emit('addTodo', description.value);
    description.value = "";
}
</script>


<template>
    <form id="form" @submit.prevent="addTodo">
        <input type="text" v-model="description" placeholder="Add task">
        <button>Add Task</button>
    </form>
</template>

<style scoped>
#form {
    padding-bottom: 20px;
}

button {
    margin-left: 10px;
}
</style>