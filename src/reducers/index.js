import { combineReducers } from "redux";
import {teams} from './teams';
import {matches} from './matches';
import {selected_match} from './selected_match';
export const rootReducer = combineReducers({
    teams,matches,selected_match
})