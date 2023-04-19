<script setup lang="ts">
import { ref } from 'vue';

const description = ref("")
defineEmits(["addTodo"])
</script>


<template>
    <form @submit.prevent="() => $emit('addTodo', description)">
        <input type="text" v-model="description">
        <button>Add Task</button>
    </form>
</template>

<style scoped></style>