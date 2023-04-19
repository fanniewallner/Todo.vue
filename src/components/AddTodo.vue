<script setup lang="ts">
import { ref } from 'vue';

const description = ref("")
defineEmits(["addTodo"])
</script>


<template>
    <form id="form" @submit.prevent="() => $emit('addTodo', description)">
        <input type="text" v-model="description" placeholder="Add task">
        <button>Add Task</button>
    </form>
</template>

<style scoped>
#form {
    padding-bottom: 20px;
}
</style>