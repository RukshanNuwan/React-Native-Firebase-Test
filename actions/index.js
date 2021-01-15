import firebase from '../firebase';

// Get data
export function getItems() {
    return (dispatch) => {
        firebase.database().ref('/items').on('value', snapshot => {
            dispatch({
                type: 'ITEMS_FETCH',
                payload: snapshot.val()
            })
        })
    }
}