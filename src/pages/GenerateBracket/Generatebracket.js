import React, { Component } from 'react';
import './Generatebracket.css';

class Teaminput extends Component {
    constructor(props){
        super(props);
        this.renderTeamOptions=this.renderTeamOptions.bind(this);
        this.updateTeam=this.updateTeam.bind(this);
    }
    renderTeamOptions(){
        var team_options=[];
        for(var i=0;i<this.props.teams.length;i++){
            var team=this.props.teams[i];
            team_options.push(
                <option key={i} value={team.id}>{team.name}</option>
            )
        }
        return team_options;
    }
    updateTeam(e){
        var value=e.target.value;
        var team=this.props.teams.find(function(team){
            return team.id===value;
        })
        this.props.updateSelectedTeam(team, this.props.idx);
    }
    render(){
        return(
            <div className='form-group'>
                <label>Select Team:</label>
                {this.props.team!==null &&
                    <select value={this.props.team.id} onChange={this.updateTeam} className='form-control'>
                        {this.renderTeamOptions()}
                    </select>
                }
                {this.props.team===null &&
                    <select onChange={this.updateTeam} className='form-control'>
                        {this.renderTeamOptions()}
                    </select>
                }
            </div>
        );
    }
}

export default class Generatebracket extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
        teams_count: 0,
        selected_teams: []
    }
    this.handleCountChange=this.handleCountChange.bind(this);
    this.renderTeamInputs=this.renderTeamInputs.bind(this);
    this.updateSelectedTeam=this.updateSelectedTeam.bind(this);
    this.submitTeams=this.submitTeams.bind(this);
  }
  updateSelectedTeam(team, team_idx){
    var new_state=this.state;
    var selected_teams=this.state.selected_teams;
    selected_teams[team_idx]=team;
    new_state.selected_teams=selected_teams;
    this.setState(new_state);
  }
  handleCountChange(e){
    var count=e.target.value;
    if(count<0){
        return;
    } else {
        var new_state=this.state;
        new_state.teams_count=count;
        this.setState(new_state);
        this.generateEmptyTeams(count);
        console.log(this.state);
    }
    
  }
  generateEmptyTeams(teams_count){
    var new_state=this.state;
    var selected_teams=[];
    for(var i=0;i<teams_count;i++){
        selected_teams.push(this.props.teams[0]);
    }
    new_state.selected_teams=selected_teams;
    this.setState(new_state)
  }
  renderTeamInputs() {
    var count=this.state.teams_count;
    var selected_teams=this.state.selected_teams;
    var team_inputs=[];
    for(var i=0;i<count;i++){
        team_inputs.push(
            <Teaminput idx={i} team={selected_teams[i]} updateSelectedTeam={this.updateSelectedTeam} teams={this.props.teams} key={i}/>
        )
    }
    return team_inputs;
  }
  submitTeams(){
    console.log(this.state.selected_teams);
    this.props.generateNewBracket(this.state.selected_teams);
  }
  render() {
    return (
      <div className='container'>
        <h1>Generate Bracket</h1>
        <div className='form-group'>
            <label>Amount of Teams:</label>
            <input onChange={this.handleCountChange} type="number" value={this.state.teams_count} className='form-control' name="team_count"/>           
        </div>
        {this.state.teams_count!==0 && 
            <button onClick={this.submitTeams} className='btn btn-success'>Submit</button>
        }
        {this.renderTeamInputs()}
      </div>
    )
  }
}
