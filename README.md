# cra-boilerplate
[WIP] Demo how to use mcs-lite-ui with CRA.

## Step

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
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```