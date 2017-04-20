import React, { Component } from 'react';
import Heading from 'mcs-lite-ui/lib/Heading';
import MCSSwitch from './components/MCSSwitch';
import Center from './components/Center';

const DOMAIN = 'ws://0.0.0.0:8000';
const DEVICE_ID = 'S1Mart-9g';
const DEVICE_KEY = '3a4eee2d697dc032334fcd9c1e1597fa2f56cfe8a222501f049dcb26a4e52f80';
const DATACHANNEL_ID = 'switch';

class App extends Component {
  state = { values: {}};
  render() {
    return (
      <Center>
        <Heading level={1}>CRA Boilerplate</Heading>
        <Heading level={3}>Connect MCS Lite with WebSocket</Heading>

        <MCSSwitch
          datachannelId={DATACHANNEL_ID}
          url={`${DOMAIN}/deviceId/${DEVICE_ID}/deviceKey/${DEVICE_KEY}`}
          onChange={datapoint => this.setState({ values: datapoint.values })}
          values={this.state.values}
        />
      </Center>
    );
  }
}

export default App;
