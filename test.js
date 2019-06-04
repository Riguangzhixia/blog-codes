function countOff(N, M) {
  if (N < 1 || M < 1) {
    return;
  }
  const source = Array(...Array(N)).map((_, i) => i + 1);
  console.log(source)
  let index = 0;
  while (source.length) {
    index = (index + M - 1) % source.length;
    console.log(source[index]);
    source.splice(index, 1);
    console.log(source.length)
  }
}
countOff(10,2);