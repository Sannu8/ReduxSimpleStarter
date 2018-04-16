export function selectBook(book) {
  //function selectBook is an action creator that returns action.
  //Action is an object with a 'type' property.
  return {
    type: "BOOK_SELECTED",
    payload: book
    //Payload is more info about the action that is taken
  };
}
