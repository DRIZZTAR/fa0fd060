import {
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from 'react';
import { fetchCalls } from './api';
import Layout from './components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import TabContent from './components/TabContent';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { groupCallsByDate } from './utils/callUtils';

function App() {
	const [calls, setCalls] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeTab, setActiveTab] = useState('inbox');
	const dataFetchedRef = useRef(false);

	useEffect(() => {
		const loadCalls = async () => {
			if (dataFetchedRef.current) return;
			dataFetchedRef.current = true;

			setIsLoading(true);
			setError(null);
			try {
				const data = await fetchCalls();
				setCalls(data);
			} catch (error) {
				console.error('Error fetching calls:', error);
				setError('Failed to load calls. Please try again.');
			} finally {
				setIsLoading(false);
			}
		};

		loadCalls();
	}, []);

	const handleArchiveAll = useCallback(() => {
		setCalls(prevCalls =>
			prevCalls.map(call => ({ ...call, is_archived: true }))
		);
	}, []);

	const handleUnarchiveAll = useCallback(() => {
		setCalls(prevCalls =>
			prevCalls.map(call => ({ ...call, is_archived: false }))
		);
	}, []);

	const handleToggleArchiveCall = useCallback((callId, isArchived) => {
		setCalls(prevCalls =>
			prevCalls.map(call =>
				call.id === callId ? { ...call, is_archived: isArchived } : call
			)
		);
	}, []);

	const {
		inboxCalls,
		archivedCalls,
		groupedInboxCalls,
		groupedArchivedCalls,
	} = useMemo(() => {
		const inboxCalls = calls.filter(call => !call.is_archived);
		const archivedCalls = calls.filter(call => call.is_archived);
		return {
			inboxCalls,
			archivedCalls,
			groupedInboxCalls: groupCallsByDate(inboxCalls),
			groupedArchivedCalls: groupCallsByDate(archivedCalls),
		};
	}, [calls]);

	if (isLoading) {
		return <LoadingState />;
	}

	if (error) {
		return <ErrorState message={error} />;
	}

	const inboxCount = inboxCalls.length;
	const archivedCount = archivedCalls.length;

	return (
		<Layout
			inboxCount={inboxCount}
			archivedCount={archivedCount}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
		>
			<div className='rounded-none border-0 flex flex-col flex-1 bg-white'>
				<div className='px-4 pt-4 hide-scrollbar'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.1 }}
						>
							<TabContent
								activeTab={activeTab}
								groupedCalls={
									activeTab === 'inbox'
										? groupedInboxCalls
										: groupedArchivedCalls
								}
								onToggleArchive={handleToggleArchiveCall}
								handleArchiveAll={handleArchiveAll}
								handleUnarchiveAll={handleUnarchiveAll}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</Layout>
	);
}

export default App;
