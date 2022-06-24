import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

// 通过render函数触发
const render = () => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app-vue");
};

// render函数触发的条件, 如果是在微前端环境下, 不用自己触发, 而是
// 需要根据微前端的生命周期去对应触发render函数
// 这里的if就是代表不是在微前端环境下， 执行render函数
// 如果是在微前端环境下就暴露一组生命周期，就是下面的bootstrap， mount， unmount生命周期
// 这几个生命周期也会在微前端框架中使用
if (!window.__MICRO_WEB__) {
  render();
}

// 开始加载结构
// 这里可以做一些加载前参数的处理， 可以在这个生命周期里做
export async function bootstrap() {
  console.log("bootstrap");
}

// 加载成功， 渲染成功
export async function mount() {
  render();
}

// 卸载
export async function unmount(ctx) {
  const { container } = ctx;
  if (container) {
    document.querySelector(container).innerHTML = "";
  }
}
