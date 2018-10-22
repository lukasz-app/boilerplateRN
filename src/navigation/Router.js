import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { Home, Splash, Auth } from "../containers";
import MainRouter from "./routers/MainRouter";

export default createSwitchNavigator(
  {
    Splash,
    MainRouter,
    Auth
  },
  {}
);
