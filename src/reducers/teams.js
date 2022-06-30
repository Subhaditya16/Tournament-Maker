import { ADD_TEAM } from '../constants';
import Team from '../models/Team';

export const teams = (state=[
    new Team("One",null),
    new Team("Two",null),
    new Team("Three",null)
],action) => {
    switch(action.type) {
        case ADD_TEAM:
            var team = action.team;
            var teams= [...state];
            teams.push(team);
            return teams;
        default:
            return state
    }
}