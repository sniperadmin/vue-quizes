<template>
  <div class="start">
    <div class="card w-50 text-center-py4 mx-auto">
      <div class="w-50 mx-auto" id="btn-container">
        <h3 class="mb-3 w-100">Vue-Quizes</h3>
        <button @click="launchGame" class="w-100 mb-3">
          start
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    // ...
  }),
  methods: {
    launchGame() {
      this.$emit("click");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
