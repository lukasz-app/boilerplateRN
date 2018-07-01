import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../stores/RootStore';

// przekazywac store?
const withStoreProvider = () => WrappedComponent =>
  class StoreProvider extends Component {
    constructor() {
      super();
      this.rootStore = new RootStore();
    }
    render() {
      return (
        <Provider {...this.rootStore.stores}>
          <WrappedComponent />
        </Provider>);
    }
  };

export default withStoreProvider;
