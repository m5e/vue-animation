import Vue from "vue";
import { mount } from "@vue/test-utils";
import Animation from "@/components/Animation";

describe("Animation.vueのテスト", () => {
  it("アイコンクリック後に表示される文章のテスト", () => {
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

  it("アイコンクリック時のテスト", () => {
    const wrapper = mount(Animation);

    const defaultData = Animation.data();
    expect(defaultData.isShowScaleUp).toBe(false);

    wrapper.find(".icon-div").trigger("click.stop");

    wrapper.vm.$nextTick(() => {
      expect(defaultData.isShowScaleUp).toBe(true);
    });
  });
});
