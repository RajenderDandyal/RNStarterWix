import withRedux from '../../hoc/withRedux';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {lazy, Suspense} from 'react';
import {Navigation} from 'react-native-navigation';
import Loader from '../../containers/App';
import screenNames from './screenNames';
import {Provider} from 'react-redux';
import store, {persistor} from '../../store/setup.js';
import {PersistGate} from 'redux-persist/es/integration/react';

const SignIn = lazy(() => import('../../containers/Auth/SignIn'));
const Register = lazy(() => import('../../containers/Auth/Register'));
const DashBoard = lazy(() => import('../../containers/DashBoard'));

export const registerScreens = () => {
  //let withReduxStore = withRedux();
  function withReduxStore(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        <Provider store={store}>
          <PersistGate
            loader={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator />
              </View>
            )}
            persistor={persistor}>
            <Suspense
              fallback={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator />
                </View>
              }>
              <Component {...props} />
            </Suspense>
          </PersistGate>
        </Provider>
      );

      return <EnhancedComponent />;
    };
  }

  // Basic registration of components without any refrence as they are independent of application state
  Navigation.registerComponent(screenNames.loader, () =>
    withReduxStore(Loader),
  );

  // Components that need refrence and need to have access to global context
  Navigation.registerComponent(screenNames.signIn, () =>
    withReduxStore(SignIn),
  );
  Navigation.registerComponent(screenNames.register, () =>
    withReduxStore(Register),
  );
  Navigation.registerComponent(screenNames.dashboard, () =>
    withReduxStore(DashBoard),
  );
};
