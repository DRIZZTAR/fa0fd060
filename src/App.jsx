import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import TabContent from './components/TabContent';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { useCalls } from './hooks/useCalls';

function App() {
	const [activeTab, setActiveTab] = useState('inbox');
	const {
		isLoading,
		error,
		inboxCalls,
		archivedCalls,
		groupedInboxCalls,
		groupedArchivedCalls,
		handleArchiveAll,
		handleUnarchiveAll,
		handleToggleArchiveCall,
	} = useCalls();

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
