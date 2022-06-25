import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../assets/theme/colors';
import {applyAlpha} from '../utils/applyAlpha';
import {
  ASK_A_DOCTOR_SCREEN,
  APPOINTMENTS_SCREEN,
} from '../constants/routeNames';
import HomeIcon from '../assets/icons/ic_home.svg';
import AppointmentIcon from '../assets/icons/ic_appointment.svg';
import AskADoctorScreen from '../screens/AskADoctor';
import AppointmentScreen from '../screens/Appointment';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({_, color, size}) => {
          if (route.name === ASK_A_DOCTOR_SCREEN) {
            return <HomeIcon height={size} width={size} color={color} />;
          } else if (route.name === APPOINTMENTS_SCREEN) {
            return <AppointmentIcon height={size} width={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: applyAlpha(colors.black, 0.5),
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {marginBottom: 8},
      })}
      initialRouteName={ASK_A_DOCTOR_SCREEN}>
      <Tab.Screen
        options={{tabBarLabel: 'Ask a Doctor'}}
        name={ASK_A_DOCTOR_SCREEN}
        component={AskADoctorScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Appointments'}}
        name={APPOINTMENTS_SCREEN}
        component={AppointmentScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
