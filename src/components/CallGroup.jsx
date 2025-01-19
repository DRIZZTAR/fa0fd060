import CallItem from './CallItem';

function CallGroup({ date, calls, onToggleArchive }) {
	return (
		<div>
			<div className='py-2 font-light text-2xl flex items-center justify-center'>
				<span className='flex items-center space-x-1'>
					<span className='text-gray-400'>···</span>
					<span className='text-[10px]'>{date}</span>
					<span className='text-gray-400'>···</span>
				</span>
			</div>
			{calls.map(call => (
				<CallItem
					key={call.id}
					call={call}
					onToggleArchive={onToggleArchive}
				/>
			))}
		</div>
	);
}

export default CallGroup;
