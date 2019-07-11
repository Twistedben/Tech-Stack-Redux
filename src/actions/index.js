// We create our action for our SelectionReducer and assign it a type which is always needed for actions. The functions SelectLibrary wraps our action, this is known as a Action Creator.
// We pass in the argument of libraryID, which is the ID of the library item that was selected and attach it as the action's payload
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};