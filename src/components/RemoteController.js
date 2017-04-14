import React, { Component } from 'react';
import { DataChannelAdapter } from 'mcs-lite-ui';

class RemoteController extends Component {
  render() {
    return (
      <div>
        <DataChannelAdapter
          dataChannelProps={{
            id: 'datachannelId',
            type: 'ANALOG_CONTROL',
            values: { value: 1 },
            format: {
              lowerbound: 1,
              upperbound: 100,
            },
          }}
          eventHandler={() => {}}
        />
        <DataChannelAdapter
          dataChannelProps={{
            id: 'datachannelId',
            type: 'SWITCH_CONTROL',
            values: { value: 1 },
            format: {},
          }}
          eventHandler={() => {}}
        />
      </div>
    );
  }
}

export default RemoteController;