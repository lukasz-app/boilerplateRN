import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';

const withStoreProvider = Root => WrappedComponent => class StoreProvider extends Component {
  constructor(props) {
    super(props);
    this.store = new Root();
    this.rootStores = this.store.stores ? { ...this.store.stores } : { someStore: this.store };
  }

  render() {
    return (
      <Provider {...this.rootStores}>
        <WrappedComponent {...this.props} />
      </Provider>);
  }
};

export default withStoreProvider;
