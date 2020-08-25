<template>
  <div id="app">
    <h1> app </h1>
    <Gallery />
    <Upload />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import Upload from '@/components/Upload.vue';
export default {
  name: 'App',
  components: {
    Gallery,
    Upload,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
