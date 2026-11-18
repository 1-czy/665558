export身体),json（{ 错误:'代理错误' }）；处理程序(请求, res) {
  response.身体), !== 'POST') {
    返回 res.状态(405).json({ 错误: "不允许使用该方法" });
  }

  尝试 {
    常量 响应DEEPSEEK_API_KEY等待 拿来("https://api.deepseek.com/chat/完成情况“      身体: JSON.严格化(请求.身体),//api.deepseek.com/chat/完成情况”, {
主体:JSON.stringify（req.体），方法: 'POST',
      标题: {
        "内容类型": 'application/json',
        "授权": "持有者"${过程.env.下周原料药密钥}`,
      },
主体：JSON.字符串（请求体），
错误

}
)
捕获（错误）
状态（500）.json（{错误：'代理错误'}）；
  }
)
