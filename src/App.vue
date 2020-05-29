<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
  @import "assets/css/style.css";
  @import "assets/css/component.css";
  @import "assets/css/responsive.css";
</style>
