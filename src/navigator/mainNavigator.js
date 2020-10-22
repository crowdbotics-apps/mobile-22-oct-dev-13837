import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013012Navigator from '../features/BlankScreen013012/navigator';
import CopyOfCopyOfBlankScreen213001Navigator from '../features/CopyOfCopyOfBlankScreen213001/navigator';
import BlankScreen212999Navigator from '../features/BlankScreen212999/navigator';
import BlankScreen212987Navigator from '../features/BlankScreen212987/navigator';
import CopyOfBlankScreen012986Navigator from '../features/CopyOfBlankScreen012986/navigator';
import BlankScreen012985Navigator from '../features/BlankScreen012985/navigator';
import BlankScreen012956Navigator from '../features/BlankScreen012956/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013012: { screen: BlankScreen013012Navigator },
CopyOfCopyOfBlankScreen213001: { screen: CopyOfCopyOfBlankScreen213001Navigator },
BlankScreen212999: { screen: BlankScreen212999Navigator },
BlankScreen212987: { screen: BlankScreen212987Navigator },
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
