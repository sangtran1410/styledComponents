onmessage = (e) => {
  let final = 0;
  for (let i = 0; i < 1e9 ; i++) {
    final += i;
  }

  postMessage(final);
}