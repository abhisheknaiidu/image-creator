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
            :config="configImg"
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
      image: new Image(100, 100),
      editIndex: this.index,
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
  computed: {
    configImg() {
      return {
        x: 20,
        y: 20,
        image: this.image,
        editIndex: this.index,
        // image.src: this.images[this.editIndex],
        width: 200,
        height: 200,
      }
    }
  },
  watch: {
      index() {
       this.editIndex = this.index;
       this.image.src = this.images[this.editIndex];
      }
  },
//   mounted() {
//     this.image.src = this.images[this.editIndex];
// }
}
</script>

<style lang="scss" scoped>

</style>