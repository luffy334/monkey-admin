import * as actionType from '../actionTypes';
import DefaultValue from '../initialValue';
import {Record} from "immutable";

const defaultValue = Record(
    {
        token: "",
        validTime: 0
    }
)



function changeState(state = defaultValue) {

}