import Vue from "vue";
import MainPage from "@/components/MainPage";

describe("MainPage.vueのテスト", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(MainPage);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector(".my-4").textContent).toEqual(
      "Thank you for playing!!"
    );

    expect(vm.$el.querySelector(".start-button").textContent).toEqual("START");
  });
});
