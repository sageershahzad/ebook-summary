
//In Redux, you handle actions within reducers
//Reducer function
export default function bookReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_BOOK":
            debugger;
            //Here spread operator has been used to clone the state andthen clone the book passed in.
            return [...state, { ...action.book }];

        default:
            return state;
    }

}