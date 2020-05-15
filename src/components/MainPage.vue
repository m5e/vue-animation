<template>
  <div class="main">
    <div>
      <b-modal v-model="finished" centered title="Cleared!!!!">
        <p class="my-4">Thank you for playing!!</p>
      </b-modal>
    </div>

    <h1>15 Pazzle</h1>
    <table class="board not-started">
      <tr>
        <td id="0">
          <button @click="movePanel">{{ this.panel[0] }}</button>
        </td>
        <td id="1">
          <button @click="movePanel">{{ this.panel[1] }}</button>
        </td>
        <td id="2">
          <button @click="movePanel">{{ this.panel[2] }}</button>
        </td>
        <td id="3">
          <button @click="movePanel">{{ this.panel[3] }}</button>
        </td>
      </tr>
      <tr>
        <td id="4">
          <button @click="movePanel">{{ this.panel[4] }}</button>
        </td>
        <td id="5">
          <button @click="movePanel">{{ this.panel[5] }}</button>
        </td>
        <td id="6">
          <button @click="movePanel">{{ this.panel[6] }}</button>
        </td>
        <td id="7">
          <button @click="movePanel">{{ this.panel[7] }}</button>
        </td>
      </tr>
      <tr>
        <td id="8">
          <button @click="movePanel">{{ this.panel[8] }}</button>
        </td>
        <td id="9">
          <button @click="movePanel">{{ this.panel[9] }}</button>
        </td>
        <td id="10">
          <button @click="movePanel">{{ this.panel[10] }}</button>
        </td>
        <td id="11">
          <button @click="movePanel">{{ this.panel[11] }}</button>
        </td>
      </tr>
      <tr>
        <td id="12">
          <button @click="movePanel">{{ this.panel[12] }}</button>
        </td>
        <td id="13">
          <button @click="movePanel">{{ this.panel[13] }}</button>
        </td>
        <td id="14">
          <button @click="movePanel">{{ this.panel[14] }}</button>
        </td>
        <td id="15">
          <button @click="movePanel">{{ this.panel[15] }}</button>
        </td>
      </tr>
    </table>

    <button class="start-button" @click="start">START</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MainPage",
  data() {
    return { panel: [], finished: false };
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
        //
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
    movePanel(e) {
      const arrayForConfirmation = {
        top: { index: null, val: null },
        buttom: { index: null, val: null },
        left: { index: null, val: null },
        right: { index: null, val: null }
      };

      // 上下左右に配置されている数値を取得
      const panelId = e.target.parentNode.id;
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
        val: this.panel[panelId - 1]
      };

      arrayForConfirmation.right = {
        index: Number(panelId) + 1,
        val: this.panel[Number(panelId) + 1]
      };

      // 対象パネルの上下左右に移動できるパネルが存在するか確認
      const targetVal = this.panel[panelId];
      Object.keys(arrayForConfirmation).forEach(item => {
        if (arrayForConfirmation[item].val === "★") {
          this.panel.splice(panelId, 1, "★");
          this.panel.splice([arrayForConfirmation[item].index], 1, targetVal);
        }
      });

      if (this.checkFinish()) {
        const boardElement = this.$el.getElementsByClassName("board")[0];
        boardElement.classList.add("complete");

        this.finished = true;
      }
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
button {
  width: 100px;
  height: 100px;
  font-size: 50px;
  color: #fff;
  background: #1aab8a;
}

button.start-button {
  width: 200px;
  margin: 30px 0px 30px 0px;
  transition: all 1s ease;
  border-radius: 5px;
  transition: all 0.3s;
  position: relative;
  z-index: 2;
  font-family: "Comic Sans MS";
}

button.start-button:hover {
  color: #1aab8a;
  background: #fff;
  transition: all 1s ease;
}

button.start-button:hover,
button.start-button:active {
  color: #00b285;
}

button.start-button:after {
  width: 0%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: -1;
}

button.start-button:hover:after,
button.start-button:active:after {
  border: 2px solid #00b285;
  width: 100%;
}

h1 {
  font-weight: normal;
  font-family: "Comic Sans MS";
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

.board {
  width: 160px;
  height: 160px;
  margin: auto;
  border: 0.5rem solid;
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
