import firebase from '../firebase';

export function getItems() {
    return (dispatch) => {
        firebase.data.ref('/items').on('value', snapshot => {
            dispatch({
                type: 'ITEMS_FETCH',
                payload: snapshot.val()
            })
        })
    }
}