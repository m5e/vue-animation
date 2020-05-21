import Vue from "vue";
import Animation from "@/components/Animation";

describe("Animation.vueのテスト", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Animation);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".content-message").textContent).toEqual(
      "Sliding background"
    );

    const contentElement = vm.$el.querySelector(".anime-scaleup-content");
    expect(contentElement.children[0].textContent).toEqual(
      "このリポジトリはVue.js, BootstrapVueを使用してます。"
    );
    expect(contentElement.children[1].textContent).toEqual(
      "とりあえずつくってみたいアニメーションを実装してみました。"
    );
  });
});
