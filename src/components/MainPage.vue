<template>
  <div class="pazzle">
    <table class="board not-started">
      <tr>
        <td id="0">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[0] }}
          </button>
        </td>
        <td id="1">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[1] }}
          </button>
        </td>
        <td id="2">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[2] }}
          </button>
        </td>
        <td id="3">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[3] }}
          </button>
        </td>
      </tr>
      <tr>
        <td id="4">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[4] }}
          </button>
        </td>
        <td id="5">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[5] }}
          </button>
        </td>
        <td id="6">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[6] }}
          </button>
        </td>
        <td id="7">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[7] }}
          </button>
        </td>
      </tr>
      <tr>
        <td id="8">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[8] }}
          </button>
        </td>
        <td id="9">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[9] }}
          </button>
        </td>
        <td id="10">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[10] }}
          </button>
        </td>
        <td id="11">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[11] }}
          </button>
        </td>
      </tr>
      <tr>
        <td id="12">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[12] }}
          </button>
        </td>
        <td id="13">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[13] }}
          </button>
        </td>
        <td id="14">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[14] }}
          </button>
        </td>
        <td id="15">
          <button class="panel-button" @click="movePanel">
            {{ this.panel[15] }}
          </button>
        </td>
      </tr>
    </table>

    <div>
      <b-modal
        v-model="finished"
        class="clear-modal"
        title="Cleared!!!!"
        :header-bg-variant="headerBgcolor"
        :header-text-variant="headerTextColor"
        centered
        ok-only
      >
        <p class="modal-para my-4">Thank you for playing!!</p>
        <template v-slot:modal-footer="{ ok }">
          <b-button
            class="modal-ok-button"
            size="xs"
            variant="success"
            @click="ok()"
            >CLOSE</b-button
          >
        </template>
      </b-modal>
    </div>
    <ul>
      <li class="elapsed-time">
        経過時間：{{ this.currentHours }} 時間 {{ this.currentMinutes }} 分
        {{ this.currentSeconds }} 秒
      </li>
    </ul>
    <button
      class="panel-button start-button"
      @click="start"
      :disabled="isPlaying"
    >
      START
    </button>
    <button class="panel-button start-button" @click="stopTimeMeasurement">
      STOP
    </button>
    <button
      class="panel-button restart-button"
      @click="reStartMeasurement"
      :disabled="isPlaying"
    >
      RESUME
    </button>
    <img src="../../images/light.jpg" />
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      panel: [],
      finished: false,
      processing: false,
      headerBgcolor: "dark",
      headerTextColor: "light",
      startTime: 0,
      diffTime: 0,
      currentTime: 0,
      animateFrame: 0,
      isPlaying: false
    };
  },
  mounted() {
    // パネル上に表示する数字を配列に格納
    for (let i = 1; i < 16; i++) {
      this.panel.push(i);
    }

    this.panel.push("★");
  },
  methods: {
    /**
     * スタートボタン押下時
     */
    start() {
      this.finished = false;

      const boardElement = this.$el.getElementsByClassName("board")[0];
      if (boardElement.classList.contains("complete")) {
        boardElement.classList.remove("complete");
      } else if (boardElement.classList.contains("not-started")) {
        boardElement.classList.remove("not-started");
      }

      while (true) {
        this.panel.sort(() => {
          return Math.random() - Math.random();
        });

        if (this.checkSolvable(this.panel)) {
          this.startTimeMeasurement();
          this.isPlaying = true;
          break;
        }
      }
    },

    /**
     * パネルが攻略可能な配置か確認する
     */
    checkSolvable(panel) {
      const targetArray = [];
      let starIndex = null;

      panel.forEach((item, index) => {
        if (item === "★") {
          starIndex = index;
        } else {
          targetArray.push(item);
        }
      });

      let checkCount = 1;
      if (0 <= starIndex && starIndex <= 3) {
        // DO NOTHING
      } else if (4 <= starIndex && starIndex <= 7) {
        checkCount = 2;
      } else if (8 <= starIndex && starIndex <= 11) {
        checkCount = 3;
      } else if (12 <= starIndex && starIndex <= 15) {
        checkCount = 4;
      }

      while (targetArray.length !== 0) {
        const targetValue = targetArray[0];
        targetArray.shift();

        targetArray.forEach(elm => {
          if (elm < targetValue) checkCount++;
        });
      }

      return checkCount % 2 === 0;
    },

    /**
     * パネル移動
     */
    refrsshPanelState(target) {
      const arrayForConfirmation = {
        top: { index: null, val: null },
        buttom: { index: null, val: null },
        left: { index: null, val: null },
        right: { index: null, val: null }
      };

      // 上下左右に配置されている数値を取得
      const panelId = target.parentNode.id;
      arrayForConfirmation.top = {
        index: panelId - 4,
        val: this.panel[panelId - 4]
      };

      arrayForConfirmation.buttom = {
        index: Number(panelId) + 4,
        val: this.panel[Number(panelId) + 4]
      };

      arrayForConfirmation.left = {
        index: panelId - 1,
        val:
          panelId - 1 !== 3 && panelId - 1 !== 7 && panelId - 1 !== 11
            ? this.panel[panelId - 1]
            : undefined
      };

      arrayForConfirmation.right = {
        index: Number(panelId) + 1,
        val:
          Number(panelId) + 1 !== 4 &&
          Number(panelId) + 1 !== 8 &&
          Number(panelId) + 1 !== 12
            ? this.panel[Number(panelId) + 1]
            : undefined
      };

      // 対象パネルの上下左右に移動できるパネルが存在するか確認
      const targetVal = this.panel[panelId];
      let oldPanelIndex = "";
      Object.keys(arrayForConfirmation).forEach(item => {
        if (arrayForConfirmation[item].val === "★") {
          this.panel.splice(panelId, 1, "★");
          document
            .getElementById(`${panelId}`)
            .childNodes[0].classList.add("fadein");

          oldPanelIndex = arrayForConfirmation[item].index;
          this.panel.splice([arrayForConfirmation[item].index], 1, targetVal);
          document
            .getElementById(`${oldPanelIndex}`)
            .childNodes[0].classList.add("fadein");
        }
      });

      if (this.checkFinish()) {
        const boardElement = this.$el.getElementsByClassName("board")[0];
        boardElement.classList.add("complete");

        this.finished = true;
        cancelAnimationFrame(this.animateFrame);
      }

      return oldPanelIndex;
    },

    movePanel(e) {
      if (this.processing) return;

      this.processing = true;
      const target = e.target;
      const oldPanelIndex = this.refrsshPanelState(target);

      setTimeout(() => {
        const newTargetPanel = document.getElementById(
          `${target.parentNode.id}`
        );
        if (!newTargetPanel) {
          this.processing = false;
          return;
        }

        const newTargetPanelChild = newTargetPanel.childNodes[0];

        const oldTargetPanel = document.getElementById(`${oldPanelIndex}`);
        if (!oldTargetPanel) {
          this.processing = false;
          return;
        }

        const oldTargetPanelChild = oldTargetPanel.childNodes[0];
        if (newTargetPanelChild.classList.contains("fadein")) {
          newTargetPanelChild.classList.remove("fadein");
        }

        if (oldTargetPanelChild.classList.contains("fadein")) {
          oldTargetPanelChild.classList.remove("fadein");
        }

        this.processing = false;
      }, 200);
    },

    // パズルが攻略済みがどうか確認
    checkFinish() {
      const completeArray = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "★"
      ];

      return this.panel.toString() === completeArray.toString();
    },

    /**
     * パネルの操作可否を制御
     */
    switchPanelOperationControl() {
      const boardElement = this.$el.getElementsByClassName("board")[0];
      if (!boardElement) return;

      boardElement.classList.toggle("not-started");
    },

    /**
     * 時間計測を開始
     */
    startTimeMeasurement() {
      // 各パラメータの初期化
      this.startTime = 0;
      this.currentTime = 0;
      this.diffTime = 0;
      this.stopTimeMeasurement();
      this.animateFrame = 0;

      this.setStartTime();
      this.timeCounter();
    },

    /**
     * 時間計測を再開
     */
    reStartMeasurement() {
      this.isPlaying = true;

      this.setStartTime();
      this.timeCounter();
    },

    /**
     * 開始時間を startTime に代入
     */
    setStartTime() {
      this.switchPanelOperationControl();

      /* eslint-disable */
      const time = this.diffTime !== "undefined" ? this.diffTime : 0;
      this.startTime = Math.floor(performance.now() - time);
    },

    /**
     * 時間計測処理
     */
    timeCounter() {
      this.currentTime = Math.floor(performance.now());
      this.diffTime = this.currentTime - this.startTime;
      this.animateFrame = requestAnimationFrame(this.timeCounter);
    },

    /**
     * 時間計測の停止
     */
    stopTimeMeasurement() {
      this.isPlaying = false;

      cancelAnimationFrame(this.animateFrame);
      this.switchPanelOperationControl();
    }
  },
  computed: {
    currentHours() {
      return Math.floor(this.diffTime / 1000 / 60 / 60);
    },
    currentMinutes() {
      return Math.floor(this.diffTime / 1000 / 60) % 60;
    },
    currentSeconds() {
      return Math.floor(this.diffTime / 1000) % 60;
    }
  }
};
</script>

<style scoped>
button.panel-button {
  width: 100%;
  height: 100%;
  min-width: 75px;
  font-size: 50px;
  color: #fff;
  background: #25a78b;
  box-shadow: 3px 4px 10px 3px #0b2e23;
}

button.panel-button.fadein {
  display: inline;
  opacity: 1;
  animation-duration: 0.5s;
  animation-name: fade-in;
}

@keyframes fade-in {
  0% {
    display: none;
    opacity: 0.4;
  }

  1% {
    display: inline;
    opacity: 0.6;
  }

  100% {
    display: inline;
    opacity: 1;
  }
}

button.start-button,
button.restart-button {
  width: 200px;
  height: 80px;
  margin: 30px 0px 30px 0px;
  transition: all 1s ease;
  border-radius: 5px;
  transition: all 0.3s;
  position: relative;
  font-family: "Comic Sans MS";
  z-index: 2;
}

button.restart-button {
  width: 260px;
}

button.start-button:disabled,
button.restart-button:disabled {
  background: #586663;
  pointer-events: none;
}

button.start-button:hover,
button.restart-button:hover {
  color: #25a78b;
  background: rgb(233, 232, 232);
  transition: all 1s ease;
}

button.start-button:hover,
button.start-button:active,
button.restart-button:hover,
button.restart-button:active {
  color: #25a78b;
}

button.start-button:after,
button.restart-button:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.3s;
  content: "";
  z-index: -1;
}

button.start-button:hover:after,
button.start-button:active:after,
button.restart-button:hover:after,
button.restart-button:active:after {
  border: 2px solid #25a78b;
  width: 100%;
}

td {
  padding: 1px 2px 2px 1px;
}

a {
  color: #33a088;
}

img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.pazzle {
  position: fixed;
  top: 0;
  padding-top: 5%;
  width: 100%;
  height: 105px;
  z-index: 1;
}

.board {
  position: relative;
  width: 60%;
  max-width: 400px;
  height: 50%;
  margin: auto;
  margin-top: 10%;
  border: 0.4rem solid;
}

.board.complete,
.not-started {
  pointer-events: none;
}

.cleared {
  font-size: 230%;
  font-weight: bold;
  color: gold;
  font-weight: normal;
  font-family: "Comic Sans MS";
}

.clear-modal {
  font-size: 150%;
  font-family: "Comic Sans MS";
}

.modal-para {
  font-size: 110%;
  font-family: "Comic Sans MS";
}

.modal-ok-button {
  font-family: "Comic Sans MS";
}

.elapsed-time {
  color: #fff;
  font-size: 150%;
}
</style>
