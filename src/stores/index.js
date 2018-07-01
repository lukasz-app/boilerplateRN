import RootStore from './RootStore';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';

export default {
  rootStore: new RootStore(),
};
export { AppStore, AuthStore, NavigationStore };
