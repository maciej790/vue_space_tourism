<template>
  <main class="wrapper">
    <Navigate />
  </main>
</template>
<script>
import Navigate from "../components/Navigate.vue";
export default {
  name: "Home",
  components: {
    Navigate,
  },
};
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
