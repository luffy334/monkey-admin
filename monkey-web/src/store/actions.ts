import * as actions from './actionTypes';
export function handleChange(payload:any){
    return  {
        type:actions.UPDATE_INPUT,
        value:payload.target.value
    }
}
export function addList(payload:any){
    return {
        type:actions.UPDATE_LIST,
        payload
    }
}
export function deleteItem(payload:any){
    return {
        type:actions.DELETE_ITEM,
        payload
    }
}