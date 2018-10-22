import { persist, create } from "mobx-persist";
import { AsyncStorage } from "react-native";
import { reaction } from "mobx-react";
const hydrate = create(AsyncStorage);

export default class AuthStore {
  constructor(root) {
    this.rootStore = root;

    Promise.all(hydrate(this, "cos"), hydrate(this, "cosInnego"))
      .then(([hydratedCos, hydratedCosInnego]) => {})
      .catch(err => {});

    reaction(() => this.token, token => {});
  }

  hydrateAuth = () => {
    return Promise.all(hydrate(this, "token"));
  };

  @persist
  @observable
  token = "";

  @action
  login = () => {
    this.token = "aaaa";
  };
}
