<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="isDrawerOpen = !isDrawerOpen" />
    <VerticalDrawer :isOpen="isDrawerOpen">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </VerticalDrawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from './components/HelloWorld.vue';
import VerticalDrawer from '../lib/VerticalDrawer.vue';

@Component({
  components: {
    HelloWorld,
    VerticalDrawer,
  },
})
export default class App extends Vue {
  isDrawerOpen = true;
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
