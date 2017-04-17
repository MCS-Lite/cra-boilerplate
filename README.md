# cra-boilerplate [![TravisCI](https://travis-ci.com/MCS-Lite/cra-boilerplate.svg?token=M5W8N3UE7Z9icpshis3W&branch=master)](https://travis-ci.com/MCS-Lite/cra-boilerplate)

> Create a MCS Lite Web App based on Create-React-App.

![DEMO](./docs/demo.gif)

## Usage

```
$ yarn install
$ yarn start
```

> User Guide: https://github.com/facebookincubator/create-react-app

## Logs

### 1. Create a project with zero config

```
$ npm i create-react-app -g
$ create-react-app cra-boilerplate
$ cd cra-boilerplate
$ yarn start
```

### 2. Introduce mcs-lite packages

```
$ yarn add mcs-lite-ui mcs-lite-theme mcs-lite-icon styled-components@next
```

### 3. Setup theme for your app

```
$ yarn add normalize.css
```

```js
// src/index.js
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### 4. Create your first react component and layout with styled-components

```js
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Center;
```

### 5. Connect MCS Lite with WebSocket

```
$ yarn add mcs-lite-connect
```

```js
// API: https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect
export default connectSocket(
  props => props.url,
  props => datapoint => props.onChange(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);
```
