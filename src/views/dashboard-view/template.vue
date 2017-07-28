<template>
  <div class="dashboard-view">
    <countdown date="May 6, 2017"></countdown>
    <h1 class="dashboard-view__title">Dashboard</h1>
    <event-listing
      v-for="event in events"
      :key="event.id"
      :is-active="event.isActive"
      :name="event.name"
      :date="event.date"
      :projects="event.projects">
    </event-listing>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./style.css"></style>
