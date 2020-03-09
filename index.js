import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import FlatListDemo from './pages/FlatListDemo';
import SectionListDemo from './pages/SectionListDemo';

const AppRoot = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      title: 'haha?'
    }
  },
  FlatListDemo: {
    screen: FlatListDemo,
    navigationOptions: {
      title: 'FlatListDemo',
    }
  },
  SectionListDemo: {
    screen: SectionListDemo,
    navigationOptions: {
      title: 'SectionListDemo'
    }
  }
});
AppRegistry.registerComponent(appName, () => AppRoot);
AppRegistry.registerComponent(appName, () => createAppContainer(AppRoot));
