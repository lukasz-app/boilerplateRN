import { NavigationActions, StackActions } from 'react-navigation';
import { action, computed, observable } from 'mobx';
import remotedev from 'mobx-remotedev';


function getCurrentState(state) {
  const childRoute = state.routes[state.index];
  if (childRoute.routes) {
    return getCurrentState(childRoute);
  }
  return childRoute;
}
function getPrevState(state) {
  const childRoute = state.routes[state.index];
  const childRoutePrev = state.index === 0 ? {} : state.routes[state.index - 1];
  if (childRoute.routes) {
    return getPrevState(childRoute);
  }
  return childRoutePrev;
}

@remotedev({ name: 'NavigationStore', filters: { blacklist: ['setNavigator'] } })
export default class NavigationStore {
  @observable currentRouteName = '';

  constructor(getStores) {
    this.getStores = getStores;
    this.navigator = undefined;
  }

  setNavigator = (navigator) => {
    this.navigator = navigator;
  }

  goBack = (key) => {
    this.navigator.dispatch(NavigationActions.back({
      key,
    }));
  }

  navigate = (routeName, params, navAction) => {
    this.navigator.dispatch(NavigationActions.navigate({
      routeName,
      params,
    }));
  }

  @action
  onNavigationStateChange = (prevState, newState, navAction) => {
    this.setCurrentRouteName(this.getCurrentRouteName());
  }

  resetAndNavigate = (routeName, params) => {
    this.navigator.dispatch(StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: '' }),
        NavigationActions.navigate({ routeName, params }),
      ],
    }));
    this.currentRouteName = routeName;
  }


  getCurrentRouteName = () => this.navigator && getCurrentState(this.navigator.state.nav).routeName;


  getPrevRouteName = () => getPrevState(this.navigator.state.nav).routeName;

  @action
  clearStore = () => {
    // this.navigator = null;
  }

  @action
  setCurrentRouteName = (routeName) => {
    this.currentRouteName = routeName;
  }
}
