import { ADD_TEAM, END_MATCH,SET_SELECTED_MATCH, UPDATE_MATCH_SCORE } from "../constants";

export const addTeam = (team) => ({
    type: ADD_TEAM,
    team
})

export const endMatch = (match_id) => ({
    type: END_MATCH,
    match_id
})

export const setSelectedMatch = (match_id) => ({
    type: SET_SELECTED_MATCH,
    match_id
})

export const updateMatchScore = (score_one,score_two,match_id) => ({
    type: UPDATE_MATCH_SCORE,
    payload: {
        score_one,
        score_two,
        match_id
    }
})