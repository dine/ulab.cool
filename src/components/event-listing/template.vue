<template>
  <div class="event-listing">
    <h2
      class="event-listing__title"
      @click="active = !active">
      Labday {{name}}
      <span class="event-listing__date">
        &mdash; {{date}}
      </span>
    </h2>
    <div class="event-listing__projects"
        :class="{'is-active': active}">
      <project-listing
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :users="project.users">
      </project-listing>
      <div class="event-listing__add">
        <h2><span>+</span> Add a new project</h2>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./style.css"></style>
