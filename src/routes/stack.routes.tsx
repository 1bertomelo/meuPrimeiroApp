import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import Page1 from '../Pages/Page1/Page1';
import Welcome from '../Pages/Welcome/Welcome';
import Login from '../Pages/Login/Login';
import NewStudent from '../Pages/NewStudent/NewStudent';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen
            name="Login"
            component={Login}
        />

        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="Page1"
            component={Page1}
        />
        <stackRoutes.Screen
            name="NewStudent"
            component={NewStudent}
        />

    </stackRoutes.Navigator>
);

export default AppRoutes;



