
<template>
      <div @click="chooseImg" class="upload">
        <a>
        <img class="icon" src="https://img.icons8.com/fluent/48/000000/upload-2.png"/>
          <input id="imgUpload" type="file" @change="onUpload" accept="image/*" hidden>
        </a>
      </div>
</template>

<script>
import firebase from 'firebase';
import swal from 'sweetalert';

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
          swal({
              title: "Great 🎉",
              text: `${progress}% complete uploaded`,
              icon: "success",
              button: "Aww yiss!",         
          });
        setTimeout(function(){  window.location.reload(); }, 5000);
         
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
  right: 15px;
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

@media screen and (max-width: 767px) {
    .icon {
    position: fixed;
    bottom: 0;
}
  }

/* .icon {
    position: fixed;
    bottom: 0;
} */

</style>