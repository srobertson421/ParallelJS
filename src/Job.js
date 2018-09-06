import shortid from 'shortid';
import ThreadManager from './ThreadManager';

class Job {
  constructor(taskFunction = () => {}) {
    this.id = shortid.generate();
    this.poolJob = ThreadManager.ThreadPool.run(taskFunction);
  }

  execute(data = null) {
    this.poolJob.send(data);
  }
}

export default Job;
