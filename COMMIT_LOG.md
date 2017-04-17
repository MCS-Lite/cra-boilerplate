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
