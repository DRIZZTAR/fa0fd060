export const groupCallsByDate = (calls) => {
  const grouped = {};
  calls.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).forEach(call => {
    const date = new Date(call.created_at);
    const dateKey = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(call);
  });
  return grouped;
};

