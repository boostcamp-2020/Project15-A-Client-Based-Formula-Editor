export const getLastId = () => {
  const storedData = JSON.parse(window.localStorage.getItem('tab-data'));
  if (storedData) {
    return storedData[storedData.length - 1].id;
  }
  return 1;
};

export default { getLastId };
