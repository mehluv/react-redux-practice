const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  const jsonObj=JSON.stringify(values, null, 1);
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 1)}`);
});
