<template>
  <div class="project-view">
    <h1>{{project.name}}</h1>
    <h3>{{project.creator.name}}</h3>
    <p>{{project.description}}</p>
    <p>{{getCollaborators()}}</p>
  </div>
</template>

<script src="./ProjectView.js"></script>
<style src="./project-view.css" scoped></style>
