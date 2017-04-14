import React, { Component } from 'react';
import RemoteController from './components/RemoteController';
import Center from './components/Center';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <Center>
        <Wrapper>
          <RemoteController />
        </Wrapper>
      </Center>
    );
  }
}

export default App;
