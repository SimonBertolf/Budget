import store from '../src/store/mock.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [() => ({ template: '<story />', store })];
