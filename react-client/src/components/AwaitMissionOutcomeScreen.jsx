import React from 'react';

import InfoPanel from './InfoPanel.jsx';
import Timer from './Timer.jsx';

class AwaitMissionOutcomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>

        <h3> Awaiting Mission Outcome </h3>

        <InfoPanel role={this.props.role} missionHistory={this.props.missionHistory} />

        <p></p>

        <Timer seconds={30}/>
        
      </div>
    )}
}

export default AwaitMissionOutcomeScreen;
