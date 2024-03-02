// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从非 0 开始
  components = 1,
  able = 2,
  table = 3,
  list = 4,
  result = 5,
  error = 6,
  frame = 7,
  nested = 8,
  permission = 9,
  system = 10,
  monitor = 11,
  tabs = 12,
  about = 13,
  editor = 14,
  flowchart = 15,
  formdesign = 16,
  board = 17,
  ppt = 18,
  guide = 19,
  menuoverflow = 20;

export {
  home,
  components,
  able,
  table,
  list,
  result,
  error,
  frame,
  nested,
  permission,
  system,
  monitor,
  tabs,
  about,
  editor,
  flowchart,
  formdesign,
  board,
  ppt,
  guide,
  menuoverflow
};
