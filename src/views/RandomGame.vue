<template>
  <div class="random">
    <h2>random game</h2>
    <div class="card w-75 text-center py-4 mx-auto">
      <Question :data="object"></Question>
      <Answers :data="object"></Answers>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question";
import Answers from "@/components/Answers";
import { mapGetters } from "vuex";

export default {
  name: "random",
  components: {
    Question,
    Answers
  },
  data: () => ({
    object: {}
  }),
  methods: {
    getObject() {
      if (this.results) {
        this.object = this.results.shift();
        console.log(this.object);
      }
    },
    SaveToLocal(data) {
      window.localStorage.setItem("data", data);
    }
  },
  computed: {
    ...mapGetters({
      results: "getResults"
    })
  },
  beforeCreate() {
    this.$store.dispatch("getQuestions").then(data => {
      try {
        this.object = this.results.shift();
        this.SaveToLocal(data);
      } catch (err) {
        console.log(err);
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
