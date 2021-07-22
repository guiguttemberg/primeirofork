function removeDuplicatedItems(arr) {
  return arr.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
}

module.exports = { removeDuplicatedItems };