import {
	PhoneIncoming,
	PhoneOutgoing,
	PhoneMissed,
	VoicemailIcon as VoiceMail,
} from 'lucide-react';
import { formatDuration } from './formatDuration';

export const formatPhoneNumber = phoneNumber => {
	if (!phoneNumber) return 'Unknown';
	const cleaned = ('' + phoneNumber).replace(/\D/g, '');
	const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
	return match
		? `${match[1]}-${match[2]}-${match[3]}-${match[4]}`
		: phoneNumber;
};

export const getCallIcon = (callType, direction) => {
	switch (callType) {
		case 'missed':
			return <PhoneMissed className='text-red-500 h-5 w-5' />;
		case 'voicemail':
			return <VoiceMail className='text-blue-500 h-5 w-5' />;
		case 'answered':
			return direction === 'inbound' ? (
				<PhoneIncoming className='text-green-500 h-5 w-5' />
			) : (
				<PhoneOutgoing className='text-purple-500 h-5 w-5' />
			);
		default:
			return direction === 'inbound' ? (
				<PhoneIncoming className='text-green-500 h-5 w-5' />
			) : (
				<PhoneOutgoing className='text-purple-500 h-5 w-5' />
			);
	}
};

export const getCallDescription = (callType, direction, duration) => {
	const formattedDuration = duration ? ` (${formatDuration(duration)})` : '';

	switch (callType) {
		case 'missed':
			return direction === 'inbound' ? 'Called' : 'No answer';
		case 'voicemail':
			return `Left voicemail${formattedDuration}`;
		case 'answered':
		default:
			return direction === 'inbound'
				? formattedDuration
				: `Out${formattedDuration}`;
	}
};
