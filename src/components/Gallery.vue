<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [],
        index: null,
        storageRef: firebase.storage().ref(),
      };
    },

    components: {
      'gallery': VueGallery
    },
    methods: {
    getImages(){
      let i = 0;
      this.storageRef.child('/').listAll().then((resp => {
        resp.items.forEach((imgRef) => {
          i++;
          this.showImages(i,imgRef);
        });
      }));
    },
    showImages(row,images){
      images.getDownloadURL().then((url) => {
        this.images.push(url);
      });
    }
  },
  created(){
    this.getImages();
  }
}
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
