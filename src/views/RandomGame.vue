<template>
  <div class="random">
    <h2>random game</h2>
    <div class="card w-75 text-center py-4 mx-auto">
      <Question :data="resultedObject"></Question>
      <Answers :data="resultedObject"></Answers>
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
  computed: {
    ...mapGetters({
      resultedObject: "getObject"
    })
  }
};
</script>

<style lang="scss" scoped></style>
