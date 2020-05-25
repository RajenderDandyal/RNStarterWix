import {Navigation} from 'react-native-navigation';
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  manageSideMenuStackOptions,
  manageNavBarOptions,
  manageSideMenuOptions,
  manageAuthStackOptions,
} from './stackConfig';
import screenNames from './screenNames';
export const goToAuth = () =>
  // Navigation.setRoot({
  //   root: {
  //     stack: {
  //       id: 'Auth',
  //       children: [
  //         {
  //           component: {
  //             name: 'SignIn',
  //             passProps: {
  //               text: 'AuthModule',
  //             },
  //             options: manageAuthStackOptions(),
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AuthStack',
        children: [
          {
            component: {
              name: screenNames.register,
              options: manageAuthStackOptions(),
            },
          },
          {
            component: {
              name: screenNames.signIn,
              options: manageAuthStackOptions(),
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        // right: manageSideMenuOptions(),
        center: {
          stack: {
            id: 'centerMenu',
            children: [
              {
                component: {
                  name: screenNames.dashboard,
                  options: manageNavBarOptions(),
                },
              },
            ],
          },
        },
        left: {
          stack: {
            id: 'leftMenu',
            children: [
              {
                component: {
                  name: screenNames.dashboard,
                  options: manageNavBarOptions(),
                },
              },
            ],
          },
        },
        options: manageSideMenuStackOptions(),
      },
    },
  });
// Navigation.setRoot({
//   root: {
//     bottomTabs: {
//       children: [
//         {
//           stack: {
//             children: [
//               {
//                 component: {
//                   name: screenNames.register,
//                 },
//               },
//             ],
//           },
//         },
//         {
//           stack: {
//             children: [
//               {
//                 component: {
//                   name: screenNames.dashboard,
//                 },
//               },
//             ],
//           },
//         },
//       ],
//     },
//   },
// });
