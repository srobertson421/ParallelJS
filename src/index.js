import TaskManager from './TaskManager';
import {
  RenderSystem
} from './systems';

console.log('Registering Systems');
TaskManager.register(RenderSystem);
console.log('Systems Registered');

console.log('Executing Tasks');
TaskManager.executeAll();
console.log('After executeAll is called');
