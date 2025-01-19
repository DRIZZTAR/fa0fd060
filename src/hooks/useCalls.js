import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { fetchCalls } from '../api';
import { groupCallsByDate } from '../utils/callUtils';

export function useCalls() {
	const [calls, setCalls] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
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

	return {
		calls,
		isLoading,
		error,
		inboxCalls,
		archivedCalls,
		groupedInboxCalls,
		groupedArchivedCalls,
		handleArchiveAll,
		handleUnarchiveAll,
		handleToggleArchiveCall,
	};
}
