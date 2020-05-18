<template>
  <div class="anime">
    <div class="icon-avatar" :class="{ 'scale-up': isShowScaleUp }"></div>

    <div class="icon-div" @click.stop="clickIcon">
      <svg
        class="bi bi-person-lines-fill"
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7 1.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm2 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div v-show="isShowContent" class="anime-scaleup-content">
      <p>このリポジトリはVue.js, BootstrapVueを使用してます。</p>
      <p>とりあえずつくってみたいアニメーションを実装してみました。</p>
    </div>

    <div>
      <div class="sliding-bg"></div>
      <div class="sliding-bg sliding-bg2"></div>
      <div class="sliding-bg sliding-bg3"></div>
    </div>

    <div class="anime-content">
      <p>Sliding background</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Anime",
  data() {
    return { processing: false, isShowScaleUp: false, isShowContent: false };
  },
  mounted() {},
  methods: {
    clickIcon() {
      if (this.processing) return;

      this.processing = true;

      this.isShowScaleUp = !this.isShowScaleUp;

      this.showContent().then(response => (this.processing = false));
    },

    showContent() {
      return new Promise(resolve => {
        setTimeout((this.isShowContent = !this.isShowContent), 3000);
        resolve();
      });
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
  z-index: 1;
}

.scale-up {
  transform: scale(150);
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
  cursor: pointer;
  z-index: 2;
}

.bi-person-lines-fill {
  position: fixed;
  left: 0;
  margin-left: 1%;
  pointer-events: none;
}

.anime-scaleup-content {
  position: fixed;
  margin-left: 10%;
  margin-top: 5%;
  animation: SlideIn 1s;
  font-family: "Comic Sans MS";
  text-align: left;
  z-index: 1;
}

@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.sliding-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -50%;
  right: -50%;
  background-image: linear-gradient(
    -60deg,
    rgb(73, 224, 131) 50%,
    rgb(9, 140, 247) 50%
  );
  opacity: 0.5;
  z-index: 0;
  animation: slidebg 4s ease-in-out infinite alternate;
}

@keyframes slidebg {
  0% {
    transform: translateX(-15%);
  }
  100% {
    transform: translateX(15%);
  }
}

.sliding-bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.sliding-bg3 {
  animation-duration: 5s;
}

.anime-content {
  position: fixed;
  top: 0;
  padding-top: 30%;
  padding-left: 50%;
  font: bold 700% "Comic Sans MS";
}

@media only screen and (max-width: 1280px) {
  .anime-content {
    position: fixed;
    top: 0;
    padding-top: 30%;
    padding-left: 50%;
    font: bold 500% "Comic Sans MS";
  }
}

@media only screen and (max-width: 890px) {
  .anime-content {
    position: fixed;
    top: 0;
    padding-top: 30%;
    padding-left: 50%;
    font: bold 400% "Comic Sans MS";
  }
}

@media only screen and (max-width: 670px) {
  .anime-content {
    position: fixed;
    top: 0;
    padding-top: 40%;
    padding-left: 30%;
    font: bold 270% "Comic Sans MS";
  }
}
</style>
