import { NavigationActions } from 'react-navigation';
import { action, computed, observable } from 'mobx';

export default class NavigationStore {
  constructor(root) {
    this.rootStore = root;
  }
}
