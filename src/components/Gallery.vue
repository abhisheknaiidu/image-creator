<template>
  <div class="gallery">
    <!-- <gallery :options="options" :images="images" :index="index" @close="index = null" >
    </gallery> -->
    <!-- <masonry   :cols="3" :gutter="40"> -->
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
    <!-- </masonry> -->
    <div>
    <Editor :index="index" :images = "images"/>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
//   import VueGallery from 'vue-gallery';
  import Editor from '@/components/Editor.vue';

  export default {
    data: function () {
      return {
        images: [],
        index: null,
        storageRef: firebase.storage().ref(),
        options: {
           onslide: function(index, slide) {
           const rotation = {
        1: 'rotate(0deg)',
        3: 'rotate(180deg)',
        6: 'rotate(90deg)',
        8: 'rotate(270deg)'
      }

    //Conditionally change rotation of image based on the image orientation data. Example jsfiddle --> https://jsfiddle.net/orotemo/obvna6qn/ Or use something like https://github.com/mattiasw/ExifReader
    //But for this example, the fix has been hardcoded. 
      slide.getElementsByTagName(
        'img'
      )[0].style = `transform: ${rotation['0']};`
    }
  },
      };
    },

    components: {
    //   'gallery': VueGallery,
      Editor,
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
  },
}
</script> 

<style scoped>
  .gallery {
      display: flex;
  }
  .image {
    /* float: left; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
