import { registerRootComponent } from 'expo';
import App from './src/App';

// registerRootComponent calls the main app component
// It also ensures that whether you load the app in Expo Go or in a standalone app, the environment is set up appropriately
registerRootComponent(App);