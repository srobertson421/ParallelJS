const { Pool } = require('threads');

export const TOTAL_THREADS = navigator.hardwareConcurrency || 4;
const ThreadPool = new Pool(TOTAL_THREADS);

class ThreadManager {
  static get ThreadPool() { return ThreadPool }
  static getNextAvailable() { return ThreadPool.idleThreads[0] }
}

export default ThreadManager;
