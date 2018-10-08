import { configure } from 'mobx';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';


class RootStore {
  constructor() {
    this.stores = {
      appStore: new AppStore(this.getStores),
      authStore: new AuthStore(this.getStores),
      navigationStore: new NavigationStore(this.getStores),
    };
  }

  getStores = () => this.stores;
}

export default RootStore;
