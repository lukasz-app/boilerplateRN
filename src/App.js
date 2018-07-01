import React, { Component } from 'react';
import { YellowBox, View, SafeAreaView } from 'react-native';
import { Provider, observer, inject } from 'mobx-react';
import Router from './Router';
import RootStore from './stores/RootStore';

class App extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: ReactNative.createElement',
      'Warning: componentWillMount',
      'Warning: componentWillReceiveProps',
      'Warning: isMounted(...)',
    ]);
    console.disableYellowBox = true;
    this.rootStore = new RootStore();
  }

  render() {
    return (
      <Provider {...this.rootStore.stores}>
        <Router />
      </Provider>
    );
  }
}
export default App;