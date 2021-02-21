export const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export const getSendChat = (today) => {
  const date = today.getDate();
  const month = today.getMonth() + 1; // januari dimulai dari 0
  const years = today.getFullYear();

  return `${years}-${month}-${date}`;
};
