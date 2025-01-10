function twoCrystalBalls(arr) {
  const jumpSize = Math.floor(Math.sqrt(arr.length));

  let i = jumpSize;

  for (; i < arr.length; i += jumpSize) {
    if (arr[i]) break;
  }

  i -= jumpSize;

  for (let j = 0; j <= jumpSize && i < arr.length; j++, i++) {
    if (arr[i]) return i;
  }

  return -1;
}

const data = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
];
console.log(twoCrystalBalls(data));
