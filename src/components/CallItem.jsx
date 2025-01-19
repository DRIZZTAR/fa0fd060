import { useState } from 'react';
import { Archive, Inbox } from 'lucide-react';
import { formatTime } from '../utils/formatTime';
import {
	formatPhoneNumber,
	getCallIcon,
	getCallDescription,
} from '../utils/callHelpers.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function CallItem({ call, onToggleArchive }) {
	const [isHovered, setIsHovered] = useState(false);
	const {
		id,
		call_type,
		direction,
		duration,
		from,
		to,
		via,
		created_at,
		is_archived,
	} = call;

	return (
		<AnimatePresence>
			<motion.div
				className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 cursor-pointer hover:bg-gray-50 transition-colors relative group'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.8 }}
				transition={{ duration: 0.3 }}
				layout
			>
				<div className='flex items-center justify-between pr-2'>
					<div className='flex items-start space-x-3'>
						<div className='mt-1'>
							{getCallIcon(call_type, direction)}
						</div>
						<div className='flex flex-col'>
							<span className='text-sm font-medium text-gray-900'>
								{formatPhoneNumber(
									direction === 'inbound' ? from : to
								)}
							</span>
							<span className='text-xs text-gray-500 font-light'>
								{getCallDescription(
									call_type,
									direction,
									duration
								)}{' '}
								via {formatPhoneNumber(via)}
							</span>
						</div>
					</div>
					<div className='text-xs text-gray-500 flex items-center'>
						{isHovered && (
							<button
								className='pr-2 text-gray-400 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100'
								onClick={e => {
									e.stopPropagation();
									setTimeout(
										() => onToggleArchive(id, !is_archived),
										50
									);
								}}
								aria-label={
									is_archived
										? 'Move to inbox'
										: 'Archive call'
								}
							>
								{is_archived ? (
									<Inbox size={16} />
								) : (
									<Archive size={16} />
								)}
							</button>
						)}
						<span className='mr-2 text-lg text-gray-400'>⋮</span>
						{formatTime(created_at)}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default CallItem;
