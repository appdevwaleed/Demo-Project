import {AppRegistry} from 'react-native';
import Root from './src/root/root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
