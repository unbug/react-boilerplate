'use strict'

import MainContainer from './containers/MainContainer';

class App extends React.Component {
  render() {
    return <MainContainer/>
  }
}

ReactDOM.render(
  <App name="App"/>,
  document.querySelector('.app')
);
