<template>
  <modal @close="$emit('close')">
    <div slot="header">
      <span v-if="hasError()">{{errorMessage}}</span>
      <h3 slot="header">Login</h3>
    </div>
    <div slot="body">
      <input type="text" v-model="credentials.username" placeholder="Enter your username"></input>
      <input type="password" v-model="credentials.password" placeholder="Enter your password"></input>
    </div>
    <div slot="footer">
      <button @click="login(credentials)">
        Access
      </button>
      <button @click="$emit('close')">
        Close
      </button>
    </div>
  </modal>
</template>

<script src="./index.js"></script>
<style scoped src="./style.css"></style>
