import Match from "./Match";

class Bracket {
    constructor(teams_list) {
        this.teams_list=teams_list;
        this.rounds_count=Bracket.getRoundsCount((this.teams_list).length);
        this.rounds_list=Bracket.generateStartingBracket(teams_list);
        this.current_round=1;
        this.bracket_completed=false;
    }
    getUncompletedMatchesForRound(current_round) {
        var matches=this.rounds_list[current_round-1];
        var uncompleted_matches=matches.map(function(match,index){
            var the_match=match;
            the_match.match_index=index;
            return the_match;
        }).filter(function(match){
            return match.matchEnded();
        })
        return uncompleted_matches;
    }
    getUncompletedMatchesForCurrentRound() {
        var uncompleted_matches=this.getUncompletedMatchesForCurrentRound(this.current_round);
        if(uncompleted_matches>0){
            var random_match=uncompleted_matches[Math.floor(Math.random()*uncompleted_matches.length)];
            return random_match;
        } else {
            return null;
        }
    }
    getRoundCompleted(current_round){
        var uncompleted_matches=this.getUncompletedMatchesForRound(current_round);
        return (uncompleted_matches.length===0);
    }
    currentRoundCompleted(){
        return (this.getRoundCompleted(this.current_round));
    }
    startNextRound() {
        if(this.current_round!==this.rounds_count){
            this.current_round+=1;
            this.generateNewRound();
        } else {
            this.bracket_completed=this.bracketEnded();            
        }
    }

    generateNewRound(){
        var matches=this.rounds_list[this.current_round-1];
        let that=this;
        var winners=matches.map(function(match){
            var winner_id=match.getWinner();
            var winner=that.teams_list.find(function(team){
                return team.id===winner_id;
            })
            return winner;
        })
        var winners_left=winners.slice(0);
        var next_round_matches=this.rounds_list[this.current_round].slice(0);
        var updated_matches=next_round_matches.map(function(match){
            var team_one;
            var team_two;
            if(winners_left.length>=2){
                team_one=winners_left.pop();
                team_two=winners_left.pop();
            } else {
                team_one=winners_left.pop();
                team_two={};
                team_two.id=null;
            }
            var match= new Match(team_one.id, team_two.id);
            return match;
        })
        this.rounds_list[this.current_round]=updated_matches;
    }
    bracketEnded(){
        var bracket_ended=true;
        for(var i=0;i<this.rounds_count;i++){
            var round_completed=this.getRoundCompleted(i+1);
            if(round_completed===false){
                bracket_ended=false;
            } else {
                continue;
            }
        }
        return bracket_ended;
    }
    getBracketWinner() {
        if(this.bracket_ended) {
            var final_round=this.rounds_list[this.round_count-1];
            var winner_id=final_round[0].getWinner();
            var winner=this.teams_list.find(function(team){
                return team.id===winner_id;
            })
            return winner;
        } else {
            return undefined;
        }
    }

    static generateStartingBracket(teams_list){
        var amount_of_teams=teams_list.length;
        var rounds_count=Bracket.getRoundsCount(amount_of_teams);
        var empty_rounds=Bracket.generateEmptyBracket(amount_of_teams,rounds_count);
        var starting_rounds=empty_rounds.slice(0);
        var teams_left=teams_list.slice(0);
        for(var i=0;i<starting_rounds[0].length;i++){
            var team_one;
            var team_two;
            if(teams_left.length>=2){
                team_one=teams_left.pop();
                team_two=teams_left.pop();
            } else {
                team_one=teams_left.pop();
                team_two={};
                team_two.id=null;
            }
            var match=new Match(team_one.id,team_two.id);
            starting_rounds[0][i]=match;
        }
        return starting_rounds;
    }
    static generateEmptyBracket(amount_of_teams,rounds_count) {
        var rounds =[];
        if(rounds_count===1){
            var empty_matches=Bracket.generateEmptyMatches(1);
            rounds.push(empty_matches);
        } else {
            for(var i=0;i<rounds_count;i++){
                var matches_for_round_amount=Math.pow(2, rounds_count-(1+i));
                var empty_matches=Bracket.generateEmptyBracket(matches_for_round_amount);
                rounds.push(empty_matches);
            }
        }
        return rounds;
    }
    static generateEmptyMatches(amount_of_matches){
        var empty_matches=[];
        for(var i=0;i<amount_of_matches;i++){
            empty_matches.push(Match.emptyMatch());
        }
        return empty_matches;
    }
    static getRoundsCount(amount_of_teams){
        var round_count = Math.ceil(Math.log(amount_of_teams)/Math.log(2));
        return round_count;
    }
}

export default Bracket;