
//First action creator 

export function createBook(book) {
    debugger;
    return { type: "CREATE_BOOK", book };
}
//Now we need functions that will handle the actions,in redux we handle the actions with reducers
//Reducers are functions that accepts the state and action and returns a new state.