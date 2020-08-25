
<template>
      <div @click="chooseImg" class="upload">
        <a>
        <img src="https://img.icons8.com/cute-clipart/64/000000/upload.png"/>
          <input id="imgUpload" type="file" accept="image/*" hidden>
        </a>
      </div>
</template>

<script>
export default {
  name: 'ButtonUpload',
  methods: {
    chooseImg(){
      document.getElementById("imgUpload").click();
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