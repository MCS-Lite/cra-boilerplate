import React, { Component } from 'react';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';
import { connectSocket } from 'mcs-lite-connect';

class MCSSwitch extends Component {
  eventHandler = (e) => {
    const { id, values, type } = e;
    const datapoint = { datachannelId: id, values };
    
    switch (type) {
      case 'SUBMIT':
        // Upload the datapoint via WebSocket.
        this.props.send(JSON.stringify(datapoint));
        break;
      default:
        // Change the state.
        this.props.setDatapoint(datapoint);
        break;
    }
  }
  
  render() {
    return (
      <DataChannelAdapter
        eventHandler={this.eventHandler}
        dataChannelProps={{
          id: this.props.datachannelId,
          type: 'SWITCH_CONTROL',
          values: this.props.values,
          format: {},
        }}
      />
    );
  }
}

// API: https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect
export default connectSocket(
  props => props.url,
  props => datapoint => props.setDatapoint(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);
