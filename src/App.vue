<template>
  <div class="app">
    <navigation-component></navigation-component>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script src="./App.js"></script>
<style src="./app.css"></style>
