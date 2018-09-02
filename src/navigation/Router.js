import { createSwitchNavigator } from 'react-navigation';
import { Home, Splash, Auth } from '../containers';

export default createSwitchNavigator({
  Splash,
  Home,
  Auth,
}, {
});
