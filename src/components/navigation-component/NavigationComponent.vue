<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about/">About</router-link></li>
      <li v-if="!user.authenticated" @click="showLogin = true">Login</li>
      <li v-if="!user.authenticated" @click="showRegistration = true">Register</li>
      <li v-if="user.authenticated">Hello!</li>
    </ul>
    <login-modal v-if="showLogin" @close="showLogin = false"></login-modal>
    <registration-modal v-if="showRegistration" @close="showRegistration = false"></registration-modal>
  </nav>
</template>

<script src="./NavigationComponent.js"></script>
<style scoped src="./navigation-component.css"></style>
