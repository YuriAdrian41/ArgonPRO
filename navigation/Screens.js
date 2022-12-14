import { Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './Menu';
import Home from './../screens/Home';
import Pro from './../screens/Pro';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = props => {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' }
        }}
      />
    </Stack.Navigator>
  );
};

const AppStack = props => {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintcolor: 'black',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal'
        }
      }}
      initialRouteName='Home'
    >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  )
}

const OnboardingStack = props => {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Pro}
        option={{
          headerTransparent: true
        }}
      />
      {/* <Stack.Screen name='App' component={AppStack} /> */}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
