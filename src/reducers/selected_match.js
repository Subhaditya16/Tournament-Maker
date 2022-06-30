import { END_MATCH, SET_SELECTED_MATCH } from '../constants';
import Match from '../models/Match';
import Team from '../models/Team';

export const selected_match = (state="",action) => {
    switch(action.type) {
        case SET_SELECTED_MATCH:
            return action.match_id;
        default:
            return state
    }
}