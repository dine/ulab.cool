<template>
  <div class="main-view">
    <h1 class="main-view__title">Welcome to Ulab</h1>
    <div class="main-view__project-list" v-for="project in projects">
      <router-link :to="{
        path: '/project/' + project.id,
      }">
        <project-tile :project="project"></project-tile>
      </router-link>
    </div>
  </div>
</template>

<script src="./MainView.js"></script>
<style scoped src="./main-view.css"></style>
