import React, { Component } from 'react';
import './Handlematch.css';
import { Navigate } from 'react-router';
import Match from '../../models/Match';

export default class Handlematch extends Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedMatch: this.props.selected_match,
        scoreUpdated: false
    }
    console.log(props);
    this.modifyScore=this.modifyScore.bind(this);
    this.updateScore=this.updateScore.bind(this);
  }
  updateScore() {
    var score_one=this.state.selectedMatch.score_one;
    var score_two=this.state.selectedMatch.score_two;
    var match_id=this.state.selectedMatch.id;
    this.props.updateScore(score_one,score_two,match_id);
    var new_state=this.state;
    new_state.scoreUpdated=true;
    this.setState(new_state);
  }
  modifyScore(team, type) {
    console.log(team);
    console.log(type);
    var score_to_update;
    if(team==="team_one"){
        score_to_update="score_one"
    } else if (team==="team_two"){
        score_to_update="score_two"
    }
    var updated_score=this.state.selectedMatch[score_to_update];
    if(type=="add"){
        updated_score=updated_score+1;
    } else if(type=="sub" && updated_score > 0){
        updated_score=updated_score-1;
    }
    var new_state=this.state;
    new_state.selectedMatch[score_to_update]=updated_score;
    this.setState(new_state);
  }
  render() {
    if(this.props.selected_match==undefined || this.state.scoreUpdated===true){
        return (
            <Navigate to='/view-matches' />
        )
    }
    return (
      <div className='container'>
        <h1>Handle Match</h1>
        <div>
            <h2>Team One: {this.state.selectedMatch.score_one}</h2>
            <button onClick={(e)=>{this.modifyScore("team_one","add")}} className='btn btn-success'>+</button>
            <button onClick={(e)=>{this.modifyScore("team_one","sub")}} className='btn btn-danger'>-</button>
        </div>
        <div>
            <h2>Team Two: {this.state.selectedMatch.score_two}</h2>
            <button onClick={(e)=>{this.modifyScore("team_two","add")}} className='btn btn-success'>+</button>
            <button onClick={(e)=>{this.modifyScore("team_two","sub")}} className='btn btn-danger'>-</button>
        </div>
        <button onClick={this.updateScore} className='btn btn-primary'>Update Score</button>
      </div>
    )
  }
}
