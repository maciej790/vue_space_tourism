<template>
  <nav class="navigate">
    <router-link to="/">
      <img src="@/assets/shared/logo.svg" alt="logo"
    /></router-link>
    <img
      src="@/assets/shared/icon-hamburger.svg"
      alt="hamburger"
      @click="isOpen = true"
    />
    <ul :class="[{ open: isOpen }, 'menu']">
      <img
        class="menu-close"
        src="@/assets/shared/icon-close.svg"
        alt="close"
        @click="isOpen = !isOpen"
      />
      <router-link
        v-for="item in menuOptions"
        :key="item.number"
        :to="item.link"
        tag="li"
        class="menu-item"
        @click="isOpen = false"
      >
        <span class="menu-bold">{{ item.number }}</span>
        {{ item.option }}
      </router-link>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const menuOptions = ref([
  {
    number: "00",
    link: "/",
    option: "Home",
  },
  {
    number: "01",
    link: "/Destination",
    option: "Destination",
  },
  {
    number: "02",
    link: "/Crew",
    option: "Crew",
  },
  {
    number: "03",
    link: "/Technology",
    option: "Technology",
  },
]);
</script>
<style lang="scss">
@import "../style/variables";
.navigate {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  position: relative;
  top: 20px;

  .menu {
    height: 100vh;
    width: 70%;
    backdrop-filter: blur(50px);
    color: $White;
    list-style-type: none;
    margin: 0;
    padding: 100px 0 0 30px;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(100%);
    transition: transform 0.2s ease;

    &.open {
      transform: translate(0);
      transition: transform 0.5s ease-in-out;
    }

    .menu-close {
      position: absolute;
      top: 30px;
      right: 30px;
    }

    .menu-item {
      margin: 40px 0 0 0;
      display: flex;
      font-size: 25px;
      letter-spacing: 3px;
      text-decoration: none;
      color: $White;
    }

    .menu-bold {
      font-weight: bold;
      margin: 0 20px 0 0;
    }
  }
}
</style>
