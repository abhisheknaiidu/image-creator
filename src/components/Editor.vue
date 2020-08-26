<template>
    <!-- <h1>Editor</h1> -->
    <!-- <div>
        abhishek
    </div> -->
    <div>
      <v-stage
        style="width:400px; height:400px; border: 2px solid #000000;"
        ref="stage"
        :config="stageSize"
      >
        <v-layer ref="layer">
          <v-image
            :config="image"
            @transformend="handleTransformEnd"
          />
          <v-transformer ref="transformer" />
        </v-layer>
      </v-stage>
    </div>
</template>

<script>
//  console.log(images);
export default {
    name: 'Editor',
    props: ['images', 'index'],
    data() {
    return {
      stageSize: {
        width: 400,
        height: 400,
      },
      image: null,
      editIndex: this.index,
      }
  },
  created() {
    const image = new window.Image();
    image.src = this.images[this.editIndex];
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    }
  },
  methods: {
      handleTransformEnd(e) {
      const rect = this.images.find((r) => r.name === this.selectedShapeName);

      rect.x = e.target.x();
      rect.y = e.target.y();
      rect.rotation = e.target.rotation();
      rect.scaleX = e.target.scaleX();
      rect.scaleY = e.target.scaleY();
    },
  },
  watch: {
      index() {
       this.editIndex = this.index;
       this.image = this.images[this.editIndex];
      }
  }
}
</script>

<style lang="scss" scoped>

</style>