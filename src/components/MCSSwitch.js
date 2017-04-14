import React, { Component } from 'react';
import { DataChannelAdapter } from 'mcs-lite-ui';
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

export default connectSocket(
  // 1. urlMapper => (ownerProps: Object) => string
  props => props.url,
  // 2. onMessage => (ownerProps: Object) => datapoint => void
  props => datapoint => props.setDatapoint(datapoint),
  // 3. propsMapper => state => props
  ({ send }) => ({ send }),
)(MCSSwitch);
