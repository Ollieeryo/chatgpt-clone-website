// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from '@/lib/chatgpt';
import type { NextApiRequest, NextApiResponse } from 'next';

type Option = {
	value: string;
	label: string;
};

type Data = {
	modelOptions: Option[];
};

// 這段程式碼是一個 Next.js API 路由處理程序，用於回應來自客戶端的 HTTP 請求並返回 ChatGPT 模型的可用選項。
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  // 從 OpenAI API 中獲取模型列表
	const models = await openai.listModels().then((res) => res.data.data);

  // 將模型列表轉換為選項列表
	const modelOptions = models.map((model) => ({
		value: model.id,
		label: model.id,
	}));

	// 將選項列表作為 JSON 數據發送回客戶端
	res.status(200).json({ modelOptions });
}
