export const selectLibrary = libraryId => {
  return {
    type: "select_library_item",
    payload: libraryId
  };
};
