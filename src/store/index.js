import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [],
    categories: [],
    questions: [],
    correct_answers: [],
    incorrect_answers: []
  },
  getters: {
    getResults: state => {
      return state.results;
    },
    getCategories: state => {
      return state.categories;
    },
    getQuestions: state => {
      return state.questions;
    },
    getCorrectAnswers: state => {
      return state.correct_answers;
    },
    getIncorrectAnswers: state => {
      return state.incorrect_answers;
    }
  },
  mutations: {
    translateData: (state, results) => {
      state.results = results;
      // console.log(results);
      results.forEach(index => {
        state.categories.push(index.category);
        state.questions.push(index.question);
        state.correct_answers.push(index.correct_answer);
        state.incorrect_answers.push(index.incorrect_answers);
      });
      // console.log(state.incorrect_answers);
    }
  },
  actions: {
    getQuestions(context) {
      axios
        .get("https://opentdb.com/api.php?amount=10")
        .then(data => {
          // console.log(data.data);
          context.commit("translateData", data.data.results);
          // resolve(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
