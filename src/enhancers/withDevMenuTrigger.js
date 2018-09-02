import React, { Component } from 'react';
import {
  View,
  PanResponder,
  NativeModules,
} from 'react-native';

const { DevMenu } = NativeModules;

const responder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => {
    if (gestureState.numberActiveTouches === 3) {
      DevMenu.show();
    }
    return false;
  },
});

const withDevMenuTrigger = WrappedComponent => props => (
  <View
    style={{
      flex: 1,
      // background color value is important here,
      // when not present breaks touch behaviour when combined with
      // createSwitchNavigator from 'react-navigation'
      backgroundColor: '#00000000',
    }}
    {...responder.panHandlers}
  >
    <WrappedComponent {...props} />
  </View>
);

export default withDevMenuTrigger;
