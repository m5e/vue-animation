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
        title="Cleared!!!!"
        :header-bg-variant="headerBgcolor"
        :header-text-variant="headerTextColor"
        centered
        ok-only
      >
        <p class="my-4">Thank you for playing!!</p>
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

    <button class="panel-button start-button" @click="start">START</button>
    <img src="../../images/light.jpg" />
  </div>
</template>

<script>
// TODO: eslint対応

/* eslint-disable */
export default {
  name: "MainPage",
  data() {
    return {
      panel: [],
      finished: false,
      processing: false,
      headerBgcolor: "dark",
      headerTextColor: "light"
    };
  },
  mounted() {
    // パネル上に表示する数字を配列に格納
    for (let i = 1; i < 16; i++) this.panel.push(i);

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

        if (this.checkSolvable(this.panel)) break;
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

button.start-button {
  width: 200px;
  height: 10%;
  margin: 30px 0px 30px 0px;
  transition: all 1s ease;
  border-radius: 5px;
  transition: all 0.3s;
  position: relative;
  font-family: "Comic Sans MS";
  z-index: 2;
}

button.start-button:hover {
  color: #25a78b;
  background: rgb(233, 232, 232);
  transition: all 1s ease;
}

button.start-button:hover,
button.start-button:active {
  color: #25a78b;
}

button.start-button:after {
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
button.start-button:active:after {
  border: 2px solid #25a78b;
  width: 100%;
}

td {
  padding: 1px 2px 2px 1px;
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
  color: #33a088;
}

.pazzle {
  position: fixed;
  top: 0;
  padding-top: 5%;
  width: 100%;
  height: 105px;
  z-index: 1;
}

img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
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
</style>
