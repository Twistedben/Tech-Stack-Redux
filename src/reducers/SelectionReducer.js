// Reducers cannot return undefined, so first return null at boot
  // The state argument is the value that was returned from the last time the reducer was run
  // Provide an initial state value so that when the app boots, state is returned as null instead of undefined so no error is thrown
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload; // Returns the libraries's ID, as seen in index.js /actions
    default:
      return state;
  }
};
