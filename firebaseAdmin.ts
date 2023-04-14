// 需要先安裝 firebase admin api
import admin from 'firebase-admin';
// import { getApps } from 'firebase/app';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

// const firebaseAppName = 'myApp-' + Math.random().toString(36).substr(2, 9); // 生成唯一的應用程式名稱;

// const apps = getApps();

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
}

const adminDb = admin.firestore();

export { adminDb };

// 注意 admin 並不需要權限，而且可以操作後端資料並刪除任何東西
