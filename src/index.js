import JobManager from './JobManager';
import {
  RenderSystem
} from './systems';

console.log('Registering Systems');
const renderJob = JobManager.register(RenderSystem);
console.log(renderJob);
console.log('Systems Registered');

console.log('Executing Tasks');
JobManager.executeAll();
console.log('After executeAll is called');
