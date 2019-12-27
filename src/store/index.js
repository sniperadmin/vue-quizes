import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from "vuex-persist";

const vuexLocalStorage = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    // results: state.results,
    object: state.object
  })
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    results: [],
    object: {},
    categories: [],
    questions: [],
    correct_answers: [],
    incorrect_answers: []
  },
  getters: {
    getResults: state => {
      return state.results;
    },
    getObject: state => {
      return state.object;
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
      state.object = results.shift();
      // console.log(results);
      results.forEach(index => {
        state.categories.push(index.category);
        state.questions.push(index.question);
        state.correct_answers.push(index.correct_answer);
        state.incorrect_answers.push(index.incorrect_answers);
      });
      // console.log(state.incorrect_answers);
    },
    clearState: state => {
      state.object = {};
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
