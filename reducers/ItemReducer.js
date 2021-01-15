export default function (state = initialState, action) {
    switch (action.type) {
        case "ITEMS_FETCH":
            console.log(action.payload);
            return {
                ...state
            }

        default:
            return state;
    }
}