import store from '../src/store/mock.js';
import router from '../src/router';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [() => ({ template: '<story />', store, router })];
