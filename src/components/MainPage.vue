<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MainPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
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
