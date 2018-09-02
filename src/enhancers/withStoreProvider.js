import React, { Component } from 'react';
import { Provider } from 'mobx-react';

const withStoreProvider = Root => WrappedComponent => class StoreProvider extends Component {
  constructor() {
    super();
    this.rootStore = new Root();
  }

  render() {
    return (
      <Provider {...this.rootStore.stores}>
        <WrappedComponent />
      </Provider>);
  }
};

export default withStoreProvider;
