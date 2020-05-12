<template>
  <div class="main">
    <h1>15 Pazzle</h1>
    <table class="board">
      <tr>
        <td id="0">
          <button @click="movePanel">{{this.panel[0]}}</button>
        </td>
        <td id="1">
          <button @click="movePanel">{{this.panel[1]}}</button>
        </td>
        <td id="2">
          <button @click="movePanel">{{this.panel[2]}}</button>
        </td>
        <td id="3">
          <button @click="movePanel">{{this.panel[3]}}</button>
        </td>
      </tr>
      <tr>
        <td id="4">
          <button @click="movePanel">{{this.panel[4]}}</button>
        </td>
        <td id="5">
          <button @click="movePanel">{{this.panel[5]}}</button>
        </td>
        <td id="6">
          <button @click="movePanel">{{this.panel[6]}}</button>
        </td>
        <td id="7">
          <button @click="movePanel">{{this.panel[7]}}</button>
        </td>
      </tr>
      <tr>
        <td id="8">
          <button @click="movePanel">{{this.panel[8]}}</button>
        </td>
        <td id="9">
          <button @click="movePanel">{{this.panel[9]}}</button>
        </td>
        <td id="10">
          <button @click="movePanel">{{this.panel[10]}}</button>
        </td>
        <td id="11">
          <button @click="movePanel">{{this.panel[11]}}</button>
        </td>
      </tr>
      <tr>
        <td id="12">
          <button @click="movePanel">{{this.panel[12]}}</button>
        </td>
        <td id="13">
          <button @click="movePanel">{{this.panel[13]}}</button>
        </td>
        <td id="14">
          <button @click="movePanel">{{this.panel[14]}}</button>
        </td>
        <td id="15">
          <button @click="movePanel">{{this.panel[15]}}</button>
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
    return { panel: [] };
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
      this.panel.sort(() => {
        return Math.random() - Math.random();
      });
    },

    // TODO: ここの処理を完成させる
    /**
     * パネルが攻略可能な配置であるかチェック
     */
    check(panel) {
      return true;
    },

    /**
     * パネルの移動
     */
    movePanel(e) {
      const arrayForConfirmation = {
        top: { index: null, val: null },
        buttom: { index: null, val: null },
        left: { index: null, val: null },
        right: { index: null, val: null }
      };
      const panelId = e.target.parentNode.id;
      const targetVal = this.panel[panelId];

      // 上下左右に配置されている数値を取得
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
      Object.keys(arrayForConfirmation).forEach(item => {
        if (arrayForConfirmation[item].val === "★") {
          this.panel.splice(panelId, 1, "★");
          this.panel.splice([arrayForConfirmation[item].index], 1, targetVal);
        }
      });
    }
  }
};
</script>

<style scoped>
.board {
  width: 160px;
  height: 160px;
  margin: auto;
  border: 0.5rem solid;
}

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
}

button.start-button:hover {
  color: #1aab8a;
  background: #fff;
  transition: all 1s ease;
}

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
