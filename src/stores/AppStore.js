import remotedev from "mobx-remotedev/lib/dev";
import { action, computed, observable } from "mobx";

export default class AppStore {
  constructor(getStores) {
    this.getStores = getStores;
  }

  // @remotedev({ name: 'Count' })

  @action
  initApp = () => {
    const {
      authStore: { hydrateAuth }
    } = this.getStores();
    hydrateAuth().then(([token, token2]) => {
      if (token) {
        navigate("MainRouter");
      } else {
        navigate("Auth");
      }
    });
  };

  @action
  add = ({ value = 1 }) => {
    this.count = this.count + value;
    if (this.count === 5) {
      this.count = 1;
      const {
        navigationStore: { navigate }
      } = this.getStores();
      navigate("Splash");
    }
  };

  @action
  subtract = ({ value = 1 }) => {
    if (this.count === 1) return;
    this.count = this.count - value;
  };
}
