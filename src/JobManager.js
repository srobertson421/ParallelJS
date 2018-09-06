import ThreadManager from './ThreadManager';
import Job from './Job';

const jobsQueue = [];

class JobManager {
  static register(taskFunction) {
    const newJob = new Job(taskFunction);
    jobsQueue.push(newJob);
    return newJob.id;
  }

  static executeOne(id, data = null) {
    const existingJob = jobsQueue.find(job => job.id === id);
    return existingJob ? existingJob.execute(data) : null;
  }

  static executeAll() {
    jobsQueue.forEach(job => job.execute());
    return;
  }
}

export default JobManager;
