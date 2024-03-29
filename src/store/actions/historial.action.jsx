import {API_URL} from '../../constants/Database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    }
}

export const ItemHistory =(item) => {
    return async dispatch => {
        try {           
            const response = await fetch(API_URL+'orders.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: new Date(),
                    id: item.id,
                    name: item.name,
                    status: item.state,
                }),
            });
            const result = await response.json();
            console.log(result);
            dispatch({
                type: ADD_ITEM,
                confirm: true
            });
        } catch (error) {
            console.error(error)
        }
    }
}