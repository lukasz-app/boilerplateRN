import React, { Component } from 'react';
import { YellowBox, View, StatusBar } from 'react-native';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Router from './navigation/Router';
import RootStore from './stores/RootStore';
import withStoreProvider from './enhancers/withStoreProvider';
import withDevMenuTrigger from './enhancers/withDevMenuTrigger';

@withDevMenuTrigger
@withStoreProvider(RootStore)
@inject('navigationStore')
@observer
export default class App extends Component {
  static propTypes = {
    navigationStore: PropTypes.shape(),
  }

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: ReactNative.createElement',
      'Warning: componentWillMount',
      'Warning: componentWillReceiveProps',
      'Warning: isMounted(...)',
    ]);
    console.disableYellowBox = true;
  }


  render() {
    const {
      navigationStore: {
        setNavigator, onNavigationStateChange,
      },
    } = this.props;
    return (
      <View style={{
        flex: 1,
      }}
      >
        <StatusBar />
        <Router
          ref={setNavigator}
          onNavigationStateChange={onNavigationStateChange}
        />
      </View>
    );
  }
}
