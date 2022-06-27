function sortByKey(array, key) {
  if (key === "name") {
    return array.sort((a, b) => {
      let x = a[key].toLowerCase();
      let y = b[key].toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else {
    let filteredArray = array.filter((item) => item[key] !== "unknown");
    let unknownArray = array.filter((item) => item[key] === "unknown");
    filteredArray = filteredArray.sort((a, b) => {
      let x = parseInt(a[key].replace(",", ""));
      let y = parseInt(b[key].replace(",", ""));
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return [...filteredArray, ...unknownArray];
  }
}

module.exports = { sortByKey };
