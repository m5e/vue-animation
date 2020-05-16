<template>
  <div class="anime">
    <div class="icon-avatar" :class="{ 'scale-up': isShowScaleUp }"></div>

    <div class="icon-div" @click="click">
      <svg
        class="bi bi-person"
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Anime",
  data() {
    return { processing: false, isShowScaleUp: false };
  },
  mounted() {},
  methods: {
    click() {
      if (this.processing) return;

      this.processing = true;

      this.isShowScaleUp = !this.isShowScaleUp;

      setTimeout((this.processing = false), 2000);
    }
  }
};
</script>

<style scoped>
.icon-avatar {
  position: fixed;
  width: 2rem;
  height: 2rem;
  left: 0;
  margin-left: 1%;
  border-radius: 50%;
  background-color: rgb(176 224 230);
  transition: transform 0.3s ease-in-out;
  content: "";
  z-index: -1;
}

.scale-up {
  transform: scale(80);
  position: fixed;
  transition: transform 0.3s ease-in-out;
}

.icon-div {
  position: fixed;
  width: 2rem;
  height: 2rem;
  left: 0;
  margin-left: 1%;
  border-radius: 50%;
  z-index: 0;
}

.bi-person {
  position: fixed;
  left: 0;
  margin-left: 1%;
  pointer-events: none;
}
</style>
