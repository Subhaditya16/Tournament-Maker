import React, { Component } from "react";
import "./Viewmatches.css";
import { Navigate } from 'react-router';
import Match from "../../models/Match";

export default class Viewmatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update_score: false
    }
    console.log(props);
    this.renderMatches = this.renderMatches.bind(this);
    this.update_score=this.update_score.bind(this);
  }
  update_score(match_id) {
    this.props.setSelectedMatch(match_id);
    var new_state=this.state;
    new_state.update_score=true;
    this.setState(new_state);
  }
  renderMatches() {
    var matches = this.props.matches;
    var match_elems = [];
    matches.map(function (match, idx) {
      match_elems.push(
        <div key={idx} className="card">
          <div>
            <h2>___ v ___</h2>
            <h3>{match.score_one} - {match.score_two}</h3>
            {(match.winner!==null) &&
            <h3>Winner: {match.winner}</h3>}
          </div>
          {(match.winner===null) && 
          <div className="match-btns">
            <button onClick={(e)=>{this.update_score(match.id)}} className="btn btn-primary">Update Score</button>
            <button onClick={(e)=>{this.props.endMatch(match.id)}}className="btn btn-danger">End Match</button>
          </div>
          }  
        </div>
      );
    }.bind(this));
    return match_elems;
  }
  render() {
    if(this.state.update_score===true){
      return(
        <Navigate to="/handle-match"/>
      )
    }
    return (
      <div className="container">
        <h1>View Matches</h1>
        {this.renderMatches()}
      </div>
    );
  }
}
