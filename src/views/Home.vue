<template>
  <div class="home">
    <Logo />
    <Start @click="launchQuiz" msg="Vue Quiz" />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from "@/components/Start.vue";
import Logo from "@/components/Logo";
import { mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    Start,
    Logo
  },
  methods: {
    launchQuiz() {
      // window.localStorage.removeItem("vuex");
      // this.clearStore();
      this.$store.dispatch("getQuestions");
      this.$router.push("/random");
    },
    ...mapMutations({
      clearStore: "clearState"
    })
  }
};
</script>
