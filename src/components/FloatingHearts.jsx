import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Heart = ({ x, y }) => (
	<motion.div
		className='absolute text-green-500 text-sm z-50'
		initial={{ x, y: y + 20, opacity: 0, scale: 0 }}
		animate={{
			y: y - 60,
			opacity: [0, 1, 1, 0],
			scale: [0, 1, 1, 0],
		}}
		transition={{ duration: 1.5, ease: 'easeOut' }}
	>
		❤️
	</motion.div>
);

const FloatingHearts = ({ onComplete }) => {
	useEffect(() => {
		const timer = setTimeout(onComplete, 1500);
		return () => clearTimeout(timer);
	}, [onComplete]);

	return (
		<div className='absolute bottom-full left-1/2 transform -translate-x-1/2 w-20 h-32 overflow-visible pointer-events-none z-50'>
			{[...Array(5)].map((_, i) => (
				<Heart
					key={i}
					x={Math.random() * 100 - 50}
					y={Math.random() * -50 - 10}
				/>
			))}
		</div>
	);
};

export default FloatingHearts;
