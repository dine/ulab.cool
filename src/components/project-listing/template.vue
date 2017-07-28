<template>
  <div class="project-listing">
    <div class="project-listing__image">
      <img :src="icon" class="project-listing__icon">
    </div>
    <div class="project-listing__description">
      {{description}}
    </div>
    <div class="project-listing__users">
      <div
        class="user-icon"
        v-for="user in users">
      </div>
      <div class="btn btn--join" @click="isModalOpen = !isModalOpen">Join</div>
    </div>
    <modal v-if="isModalOpen" @close="isModalOpen = !isModalOpen">
      <div slot="header">
        <h3>{{name}}</h3>
      </div>
      <div slot="body">
        <p>{{description}}</p>
        <div class="modal__users">
          <div class="user-icon" v-for="user in users"></div>
        </div>
      </div>
      <div class="btn--join align-center" @click="isModalOpen = !isModalOpen" slot="footer">Join</div>
    </modal>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./style.css"></style>
