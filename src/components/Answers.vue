<template>
  <div>
    <!-- <p v-html="answer"></p> -->
    <ul>
      <li class="text-success">
        {{ data.correct_answer }}
      </li>
      <li v-for="(other, index) in data.incorrect_answers" :key="index">
        {{ other }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "answers",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    answers: []
  }),
  created() {
    let allAnswer = {
      correct: this.data.correct_answer,
      wrong: this.data.incorrect_answers
    };
    this.answers = allAnswer;
    console.log(this.answers);
  }
};
</script>

<style lang="scss" scoped></style>
