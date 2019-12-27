<template>
  <div>
    <button
      v-for="(answer, index) in answers"
      :key="index"
      v-html="answer"
    ></button>
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
    answers: [],
    correct: "",
    wrong: ""
  }),
  methods: {
    manageData() {}
  },
  created() {
    let allAnswer = {
      correct: this.data.correct_answer,
      wrong: this.data.incorrect_answers
    };
    this.correct = allAnswer.correct;
    this.wrong = allAnswer.wrong;

    allAnswer.wrong.forEach(element => {
      this.answers.push(element);
    });
    this.answers.push(allAnswer.correct);
    this.answers.sort();
  }
};
</script>

<style lang="scss" scoped></style>
