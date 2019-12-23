<template>
  <div class="start">
    <div class="card w-50 text-center-py4 mx-auto">
      <div class="w-75 mx-auto">
        <img alt="Vue logo" src="../assets/logo.png" class="img-fluid" />
      </div>
      <h1>{{ msg }}</h1>
      <div class="w-50 mx-auto" id="btn-container">
        <button @click="launchGame" class="w-100 mb-3">
          start
        </button>
        <button class="w-100">
          cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    // ...
  }),
  methods: {
    launchGame() {
      // this.$store.dispatch("getQuestions").then(data => {
      //   window.localStorage.setItem("data", data);
      // });
      this.$router.push("/random");
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
