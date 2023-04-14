// 先安裝 open ai
import { Configuration, OpenAIApi } from "openai";

// 在 env 設置 open ai key 後設定 configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default openai;