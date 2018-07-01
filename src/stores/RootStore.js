import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationsStore from './NavigationStore';

export default class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
    this.navigationStore = new NavigationsStore(this);
    this.stores = {
      appStore: this.appStore,
      authStore: this.authStore,
      navigationStore: this.navigationStore,
    };
  }
}

