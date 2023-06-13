// 文章相关的 API 接口，都封装到这个模块中
import request from "@/utils/request.js";

// 向外按需导出一个 API 函数
export const getArticleListAPI = function (_page, _limit) {
  //这里返回的是一个promise对象
  return request.get("/articles", {
    // 请求参数
    params: {
      _page,
      _limit,
    },
  });
}; 
