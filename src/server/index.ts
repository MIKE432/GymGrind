import 'reflect-metadata';
import { Application } from './Application';
import { container } from './inversify.config';

Application.startup(container).then(
  () => {
    console.log('Application started');
  },
  () => {
    console.log('Application terminated');
  }
);
