<script setup lang="ts">
import ShowList from './components/ShowList.vue';



</script>

<template>
  <div id="todoApp">
    <h1>What do you have planned for today?</h1>
    <ShowList></ShowList>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
