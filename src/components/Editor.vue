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

            :config="{
                image : images[index]
                }"
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
      }
  },
}
</script>

<style lang="scss" scoped>

</style>