export default selectedLibraryId => {
  return {
    type: "select_library_item",
    payload: selectedLibraryId
  };
};
