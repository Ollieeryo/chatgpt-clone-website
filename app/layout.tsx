import { SessionProvider } from '@/components/SessionProvider';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import '@/styles/globals.css';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';

export const metadata = {
	title: 'GhatGPT Clone',
	description: 'Generated by Next.js',
};

// 可以使用 async await 是因為這是 server component
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);

	return (
		<html lang='en'>
			<body>
				<SessionProvider session={session}>
					{!session ? (
						<Login />
					) : (
						<div className='flex'>
							{/* Sidebar */}
							<div className='bg-[#202123] max-w-xs h-screen overflow-auto md:min-w-[20rem]'>
								<SideBar />
							</div>

							{/* ClientProvider - Notification */}
							<ClientProvider />

							<div className='bg-[#343541] flex-1'>{children}</div>
						</div>
					)}
				</SessionProvider>
			</body>
		</html>
	);
}
