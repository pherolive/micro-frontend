const router = require("koa-router")();

router.prefix("/vue2"); // http://localhost:3000/vue2

router.get("/car/list", function (ctx, next) {
  // ctx.request.query 获取请求参数
  ctx.body = [
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
    {
      img: "https://p3.dcarimg.com/img/motor-mis-img/ccd160a5eabcb038154de8f077f9eeb4~2508x0.jpg",
      name: "奔驰",
    },
  ];
});

module.exports = router;
