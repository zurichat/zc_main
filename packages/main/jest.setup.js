// jest.setup.js
// import Mocks for SystemJS mock below
import utilities from "@zuri/utilities";
// Mock SystemJS
global.System = {
  import: jest.fn(mockImport)
};

function mockImport(importName) {
  // What you do in mock import will depend a lot on how you use SystemJS in the project and components you wish to test

  /* If I had already created a mock for `@react-mf/people` and I wanted to test this component:
   *  https://github.com/react-microfrontends/planets/blob/main/src/planets-page/selected-planet/selected-planet.component.js#L5
   * I would want `System.import('@react-mf/people')` to resovle to my mock one way to accomplish this would be the following
   */
  if (importName === "@zuri/utilities") {
    return Promise.resolve(utilities);
  } else {
    console.warn("No mock module found");
    return Promise.resolve({});
  }
}
