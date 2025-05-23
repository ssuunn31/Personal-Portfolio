<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/achievements"></router-link>
      <router-link to="/skills"></router-link>
      <router-link to="/contact"></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
nav {
  display: flex;
  gap: 10px;
}

nav a {
  text-decoration: none;
  color: blue;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>

