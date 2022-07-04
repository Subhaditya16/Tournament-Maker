import {v4 as uuidv4} from'uuid';

class Match {
    static get TEAM_ONE(){
        return "team_one";
    }
    static get TEAM_TWO(){
        return "team_two";
    }
    static get TIE(){
        return "Tie";
    }
    constructor(team_one,team_two,winner=null){
        this.id=uuidv4()
        this.team_one=team_one
        this.team_two=team_two
        this.winner=winner
        this.score_one= 0
        this.score_two= 0
    }
    static emptyMatch(){
        return new Match(null, null)
    }
    setWinner(winner){
        this.winner=winner
    }
    getWinner(){
        if(this.winner===Match.TIE){
            return null;
        } else if(this.winner===Match.TEAM_ONE || this.winner===Match.TEAM_TWO) {
            return this[this.winner];
        }
    }
    setWinnerByScore(){
        if(this.score_one>this.score_two){
            this.setWinner(Match.TEAM_ONE);
        } else if(this.score_one<this.score_two){
            this.setWinner(Match.TEAM_TWO);
        } else {
            this.setWinner(Match.TIE);
        }
    }
    matchEnded(){
        return this.winner!==null;
    }
}

export default Match;