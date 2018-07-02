import React, { Component } from 'react';
import { YellowBox, View, SafeAreaView } from 'react-native';
import { observer, inject } from 'mobx-react';
import Router from './navigation/Router';
import RootStore from './stores/RootStore';
import withStoreProvider from './enhancers/withStoreProvider';

@withStoreProvider(RootStore)
@inject('navigationStore')
@observer
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
  }

  render() {
    return (
      <View style={{flex: 1,alignSelf:'stretch', alignItems: 'center',justifyContent:'center'}} >
         <Router
          ref={(nav) => {
            this.props.navigationStore.setNavigator(nav);
        }}
        />
      </View>
    );
  }
}
export default App;