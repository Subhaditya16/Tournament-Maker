import { END_MATCH, UPDATE_MATCH_SCORE } from '../constants';
import Match from '../models/Match';
import Team from '../models/Team';

export const matches = (state=[
    new Match("","")
],action) => {
    switch(action.type) {
        case UPDATE_MATCH_SCORE:
            var match_id=action.payload.match_id;
            var score_one=action.payload.score_one;
            var score_two=action.payload.score_two;
            var match_idx=state.findIndex(function(element){
                return element.id==match_id;
            })
            var new_matches=[...state];
            var updated_match=new_matches[match_idx];
            updated_match.score_one=score_one;
            updated_match.score_two=score_two;
            new_matches[match_idx]=updated_match;
            return new_matches;
        case END_MATCH: 
            var match_id=action.match_id;
            var match_idx=state.findIndex(function(element){
                return element.id==match_id;
            })
            var new_matches=[...state];
            var updated_match=new_matches[match_idx];
            updated_match.setWinnerByScore();
            new_matches[match_idx]=updated_match;
            return new_matches;
        default:
            return state
    }
}