// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';

type Data = {
	// name: string;
	answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { prompt, chatId, model, session } = req.body;

	if (!prompt) {
		res.status(400).json({ answer: 'Please provide a prompt!' });
		return;
	}

	if (!chatId) {
		res.status(400).json({ answer: 'Please provide a valid chat ID' });
		return;
	}

	// ChatGPT Query
	const response = await query(prompt, chatId, model);

	// 需要先建立 firebase admin 檔案，因為要權限
	// ChatGPT 會回應一包 message
	const message: Message = {
		text: response || 'ChatGPT was unable to find an answer for that!',
		// 需要到 admin 去拿到 timestamp (時間戳記)
		createdAt: admin.firestore.Timestamp.now(),
		user: {
			_id: 'ChatGPT',
			name: 'ChatGPT',
			avatar: 'https://links.papareact.com/89k',
		},
	};

	// 等待 admin 後端資料
	// 接著把 ChatGPT 拿到的 message 傳入 firebase admin
	await adminDb
		.collection('users')
		.doc(session?.user?.email)
		.collection('chats')
		.doc(chatId)
		.collection('messages')
		.add(message);

	// 最後回應 ChatGPT 給出的答案
	res.status(200).json({ answer: message.text });
}
