import React, { Component } from 'react';
import './Homepage.css';
import { Navigate } from 'react-router';

export default class Homepage extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state={
      addTeam: false
    }
    this.renderTeams=this.renderTeams.bind(this);
    this.addTeam=this.addTeam.bind(this);
    this.viewMatches=this.viewMatches.bind(this);
  }
  addTeam(){
    var new_state=this.state;
    new_state.addTeam=true;
    this.setState(new_state)
  }
  viewMatches(){
    var new_state=this.state;
    new_state.viewMatches=true;
    this.setState(new_state)
  }
  renderTeams(){
    var team_renders= [];
    this.props.teams.map(function(team,idx){
      team_renders.push(
        <div key={idx} className='card card-team'>
          <div className='card-body'>
            <img src={team.img_url} />
            {team.name}
          </div>
        </div>
      )
    });
    return team_renders;
  }
  render() {
    if(this.state.addTeam===true){
      return (
        <Navigate to="/add-team"/>
      )
    } else if(this.state.viewMatches===true){
      return(
        <Navigate to="/view-matches"/>
      )
    }
    return (
      <div className='home-page container'>
        <h1 className='home-title'>Welcome to Homepage.</h1>
        <button onClick={this.addTeam} type='button' className='btn btn-primary'>Add Team</button>
        <button onClick={this.viewMatches} type='button' className='btn btn-info'>View Matches</button>
        <div className='team-view'>
          {this.renderTeams()}
        </div>
      </div>
    )
  }
}
