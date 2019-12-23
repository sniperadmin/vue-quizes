<template>
  <div>
    <p v-html="data.question"></p>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>
