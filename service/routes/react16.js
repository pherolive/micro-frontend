const router = require('koa-router')()

router.prefix('/react16')

router.post('/login', function (ctx, next) {
  // ctx.request.body 获取请求体参数
  ctx.body = ctx.request.body
})

module.exports = router
