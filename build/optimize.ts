/**
 * 此文件作用于 `vite.config.ts` 的 `optimizeDeps.include` 依赖预构建配置项
 * 依赖预构建，`vite` 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
 * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include里，否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
 * 温馨提示：如果您使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
 */
const include = [
  "qs",
  "mitt",
  "xlsx",
  "dayjs",
  "axios",
  "pinia",
  "swiper",
  "lodash",
  "echarts",
  "intro.js",
  "vue-i18n",
  "xe-utils",
  "vxe-table",
  "js-cookie",
  "lodash-es",
  "cropperjs",
  "jsbarcode",
  "sortablejs",
  "swiper/vue",
  "md-editor-v3",
  "@vueuse/core",
  "vue3-danmaku",
  "v-contextmenu",
  "vue-pdf-embed",
  "lodash-unified",
  "@ctrl/tinycolor",
  "china-area-data",
  "vue-json-pretty",
  "@logicflow/core",
  "@pureadmin/utils",
  "@wangeditor/editor",
  "responsive-storage",
  "@howdyjs/mouse-menu",
  "@logicflow/extension",
  "vue-virtual-scroller",
  "element-resize-detector",
  "@amap/amap-jsapi-loader",
  "el-table-infinite-scroll",
  "@wangeditor/editor-for-vue",
  "xgplayer/dist/simple_player",
  "xgplayer/es/controls/volume",
  "vuedraggable/src/vuedraggable",
  "xgplayer/es/controls/screenShot",
  "xgplayer/es/controls/playbackRate"
];

const exclude = [
  "@iconify-icons/ep",
  "@iconify-icons/ri",
  "@iconify-icons/mdi",
  "@pureadmin/theme/dist/browser-utils"
];

export { include, exclude };
