<template>
  <modal @close="$emit('close')">
    <h3 slot="header">Login</h3>
    <div slot="body">
      <input type="text" v-model="credentials.username" placeholder="Enter your username"></input>
      <input type="email" v-model="credentials.email" placeholder="Enter your email"></input>
      <input type="password" v-model="credentials.firstPassword" placeholder="Enter your password"></input>
      <input type="password" v-model="credentials.secondPassword" placeholder="Confirm your password"></input>
    </div>
    <div slot="footer">
      <button @click="signup(credentials)">
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
