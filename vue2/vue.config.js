const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const packageName = "vue2";
const port = 9004;

module.exports = {
  outputDir: "dist", // 打包的目录, 最终输出在根目录下的dist
  assetsDir: "static", // 打包的静态资源
  filenameHashing: true, // 打包出来的文件，会带有hash信息
  publicPath: "http://localhost:9004",
  // 使用vue-cli-service启动的本地服务配置
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: false,
    disableHostCheck: true,
    port,
    headers: {
      "Access-Control-Allow-Origin": "*", // 本地服务的跨域内容, *代表允许所有访问
      // 这里为何要配置跨域, 因为在微前端框架里获取现在启动的本地服务的内容
    },
  },
  // 自定义webpack配置, 这些配置会替换掉vue-cli-service定义的配置
  configureWebpack: {
    resolve: {
      // 重命名路径前缀
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      // 可以通过window.vue2获取当前打包的子应用的所有内容
      library: `${packageName}`,
      // 把子应用打包成 umd 库格式 , 这样就可以使用commonjs进行加载commonjs 在浏览器，node环境里都可以使用
      libraryTarget: "umd",
    },
  },
};
