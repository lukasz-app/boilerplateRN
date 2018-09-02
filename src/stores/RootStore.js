import { configure } from 'mobx';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';


configure({ enforceActions: true });

export default class RootStore {
  constructor() {
    configure({ enforceActions: true });
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
