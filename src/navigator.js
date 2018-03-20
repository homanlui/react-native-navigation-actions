
import React, { Component } from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation'

// Reference:
// https://reactnavigation.org/docs/navigation-actions.html
// Based on this debate:
// https://github.com/react-navigation/react-navigation/issues/1439#issuecomment-340293063

let navigatorRef;
const Actions = {
  navigate: (routeName, params, action, key) => {
    if (typeof(routeName) === 'string') {
      navigatorRef.dispatch(NavigationActions.navigate({routeName, params, action, key}))
    } else {
      navigatorRef.dispatch(NavigationActions.navigate(routeName))
    }
  },
  back: (...params) => navigatorRef.dispatch(NavigationActions.back(...params)),
  reset: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  setParams: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  init: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  reset: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  replace: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  push: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  pop: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
  popToTop: (...params) => navigatorRef.dispatch(NavigationActions.reset(...params)),
};

const AppNavigator = (RootNavigator) => {
  const Navigator = StackNavigator({
    __root__: { screen: RootNavigator },
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

  class AppNavigatorClass extends Component {
    componentDidMount() {
      navigatorRef = this.navigator;
    }

    render() {
      return (
        <Navigator ref={nav => this.navigator = nav} />
      );
    }
  };
  return AppNavigatorClass;
};



export { AppNavigator, Actions, navigatorRef };
export default module.exports;

