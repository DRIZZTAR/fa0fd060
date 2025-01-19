const BASE_URL = 'https://aircall-api.onrender.com';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'An error occurred');
  }
  return response.json();
};

export const fetchCalls = async () => {
  const response = await fetch(`${BASE_URL}/activities`);
  return handleResponse(response);
};

export const fetchCallDetails = async (callId) => {
  const response = await fetch(`${BASE_URL}/activities/${callId}`);
  return handleResponse(response);
};

export const updateCallArchiveStatus = async (callId, isArchived) => {
  const response = await fetch(`${BASE_URL}/activities/${callId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_archived: isArchived }),
  });
  return handleResponse(response);
};

export const resetCalls = async () => {
  const response = await fetch(`${BASE_URL}/reset`, { method: 'PATCH' });
  return handleResponse(response);
};

