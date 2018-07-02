import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';

export default class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
    this.navigationStore = new NavigationStore(this);
    this.stores = {
      appStore: this.appStore,
      authStore: this.authStore,
      navigationStore: this.navigationStore,
    };
  }
}

