import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen012986Navigator from '../features/CopyOfBlankScreen012986/navigator';
import BlankScreen012985Navigator from '../features/BlankScreen012985/navigator';
import BlankScreen012956Navigator from '../features/BlankScreen012956/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen012986: { screen: CopyOfBlankScreen012986Navigator },
BlankScreen012985: { screen: BlankScreen012985Navigator },
BlankScreen012956: { screen: BlankScreen012956Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
