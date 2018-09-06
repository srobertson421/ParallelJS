(function main() {
  const availableThreads = navigator.hardwareConcurrency || 4;
  const threadPool = new threads.Pool(availableThreads);
})()
