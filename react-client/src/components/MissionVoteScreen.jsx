import React from 'react';

import InfoPanel from './InfoPanel.jsx';
import Timer from './Timer.jsx';

class MissionVoteScreen extends React.Component {

  constructor(props) {
    super(props);
    this.fail = this.fail.bind(this);
    this.succeed = this.succeed.bind(this);
  }

  fail(){
    this.props.socket.emit('missionvote', {roomname:this.props.roomname, vote: false });
    this.props.waiting();
  }
  succeed() {
    this.props.socket.emit('missionvote', {roomname:this.props.roomname, vote: true });
    this.props.waiting();
  }

  render() {

    return (
      <div id="missionVoteScreen">

        <h3> Mission Vote </h3>

        <InfoPanel role={this.props.role} missionHistory={this.props.history}  extraInfo = {this.props.extraInfo}/>

        
        <p> You are on a mission with</p>
        <table >
        {this.props.missionPlayers.map((player, index)=>{
          return (<tr key={index}>{player}</tr>)
        })}
        </table>

        <p>
        Do you want the mission to fail or succeed?
        </p>
        <div className="missionVoteScreenInput">
          <button onClick={this.fail}>
            Mission Fails!
          </button>

          <button onClick={this.succeed}>
            Mission Succeeds!
          </button>
        </div>

      </div>
      )}
}

export default MissionVoteScreen
