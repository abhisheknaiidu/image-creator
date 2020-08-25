
<template>
      <div @click="chooseImg" class="upload">
        <a>
        <img src="https://img.icons8.com/cute-clipart/64/000000/upload.png"/>
          <input id="imgUpload" type="file" @change="onUpload" accept="image/*" hidden>
        </a>
      </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ButtonUpload',
  data(){
    return {
      img: null,
      storageRef: firebase.storage()
    }
  },
  methods: {
    chooseImg(){
      document.getElementById("imgUpload").click();
    },
    onUpload(e){
      this.img = e.target.files[0];
      const storage = this.storageRef.ref(`${this.img.name}`).put(this.img);
      storage.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        if(progress == 100) {
          alert(`${progress}% complete uploaded`);
          window.location.reload();
        }
      }, err => {
        alert(err.message);
      });
    },
  }
}
</script>

<style>
.upload {
  cursor: pointer;
  position: absolute;
  right: 0px;
  bottom: 50px;
  display: inline-block;
  width: 60px;
  height: 60px;
  /* border-radius: 100%; */
  text-align: center;
  line-height: 60px;
  margin-bottom: 20px;
  margin-right: 20px;
}

</style>