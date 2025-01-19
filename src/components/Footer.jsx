import { useState } from 'react';
import { Phone, User, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './FloatingHearts';

function Footer({ inboxCount }) {
	const [showHearts, setShowHearts] = useState(false);
	return (
		<div className='border-t bg-gradient-to-b from-gray-200 via-gray-50 to-gray-200 px-4 w-full'>
			<div className='flex items-center justify-between'>
				<button className='flex flex-col items-center relative cursor-default'>
					<Phone className='h-6 w-6 text-gray-400 pb-2 sm:pb-0' />
					<AnimatePresence>
						{inboxCount > 0 && (
							<motion.div
								className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.2 }}
							>
								{inboxCount}
							</motion.div>
						)}
					</AnimatePresence>
					<div className='absolute rounded-t-lg bottom-0 sm:-bottom-2 left-0 right-0 h-1 bg-green-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]'></div>
				</button>
				<button className='flex flex-col items-center cursor-default'>
					<User className='h-6 w-6 text-gray-400 pb-2 sm:pb-0' />
				</button>
				<button
					className='flex flex-col items-center -mt-6 border-4 border-white rounded-full relative '
					onClick={() => setShowHearts(true)}
				>
					<div className='sm:h-14 sm:w-14 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg relative z-10'>
						<div className='grid grid-cols-3 gap-1'>
							{[...Array(9)].map((_, i) => (
								<div
									key={i}
									className='w-1.5 h-1.5 bg-white rounded-full shadow-[inset_0_-2px_2px_rgba(0,0,0,0.4)]'
								/>
							))}
						</div>
					</div>
					{showHearts && (
						<FloatingHearts
							onComplete={() => setShowHearts(false)}
						/>
					)}
				</button>
				<button className='flex flex-col items-center cursor-default'>
					<Settings className='h-6 w-6 text-gray-400 pb-2 sm:pb-0' />
				</button>
				<button className='flex flex-col cursor-default pb-2 sm:pb-0'>
					<div className='flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-gray-300 relative'>
						<div className='h-3 w-3 rounded-full bg-green-500 shadow-[inset_0_-4px_4px_rgba(0,0,0,0.5)]'></div>
					</div>
				</button>
			</div>
		</div>
	);
}

export default Footer;
