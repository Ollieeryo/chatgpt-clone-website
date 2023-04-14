import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function HomePage() {
	return (
		<div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
			<h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

			<div className='flex space-x-2 text-center'>
				<div>
					<div className='flex flex-col items-center justify-center mb-5'>
						{/* SunIcon */}
						<SunIcon className='h-8 w-8' />
						<h2>Examples</h2>
					</div>

					<div className='space-y-2'>
						<p className='infoText'>&quot;Explain Something to me&quot;</p>
						<p className='infoText'>&quot;What is the difference between a dog and a cat&quot;</p>
						<p className='infoText'>&quot;What is the color of the sun&quot;</p>
					</div>
				</div>

				<div>
					<div className='flex flex-col items-center justify-center mb-5'>
						{/* SunIcon */}
						<BoltIcon className='h-8 w-8' />
						<h2>Capabilities</h2>
					</div>

					<div className='space-y-2'>
						<p className='infoText'>
							&quot;Remembers what user said earlier in the conversation&quot;
						</p>
						<p className='infoText'>&quot;Allows user to provide follow-up corrections&quot;</p>
						<p className='infoText'>&quot;Trained to decline inappropriate requests&quot;</p>
					</div>
				</div>

				<div>
					<div className='flex flex-col items-center justify-center mb-5'>
						{/* SunIcon */}
						<ExclamationTriangleIcon className='h-8 w-8' />
						<h2>Limitations</h2>
					</div>

					<div className='space-y-2'>
						<p className='infoText'>&quot;May occasionally generate incorrect information&quot;</p>
						<p className='infoText'>
							&quot;May occasionally produce harmful instructions or biased content&quot;
						</p>
						<p className='infoText'>&quot;Limited knowledge of world and events after 2021&quot;</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
