// DON'T CHANGE THE CODE (CAN BREAKE THE APP) !!!!IMPORTANT MESSAGE!!!!
export function registerComponent(app) {
  const register = (requireContext) => {
    requireContext.keys().forEach(fileName => {
      const componentConfig = requireContext(fileName);
      const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');
      app.component(componentName, componentConfig.default || componentConfig);
    });
  };

  const compLibrary = require.context('./ComponentsLibrary', false, /\.vue$/);
  const layoutLibrary = require.context('./Layout', false, /\.vue$/);

  register(compLibrary);
  register(layoutLibrary);
}
// THIS CODE FOR DEFINED THE COMPONENTS AS GLOBAL COMPONENTS (IF NEED A CHANGES, PLEASE BE CAREFULLY)