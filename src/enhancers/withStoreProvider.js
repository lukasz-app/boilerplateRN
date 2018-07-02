import React, { Component } from 'react';
import { Provider } from 'mobx-react';

const withStoreProvider = (root) => WrappedComponent =>
  class StoreProvider extends Component {
    constructor() {
      super();
      this.rootStore = new root();
    }
    render() {
      return (
        <Provider {...this.rootStore.stores}>
          <WrappedComponent />
        </Provider>);
    }
  };

export default withStoreProvider;
