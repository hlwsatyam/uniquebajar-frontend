function CountStar(data, filterStar) {
  let count = 0;
  data.map((item) => {
    if (item.no_of_star == filterStar) {
      count++;
    }
  });
  return count;
}

export default CountStar;
