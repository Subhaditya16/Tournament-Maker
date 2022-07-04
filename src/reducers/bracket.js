import { GENERATE_NEW_BRACKET } from "../constants"

import Bracket from "../models/Bracket"

export const bracket = (state=null ,action) => {
    switch(action.type) {
        case GENERATE_NEW_BRACKET:
            var bracket=new Bracket(action.teams);
            return bracket;
        default:
            return state
    }
}