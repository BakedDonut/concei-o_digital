import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { NotificationConfigScreen } from '../screens/NotificationConfigScreen';
import { theme } from '../styles/theme';
import { AuthProvider } from '../providers/AuthContextProvider'; 
import { Auth } from './Auth';

const Drawer = createDrawerNavigator();

export function Main() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: theme.colors.primary,
            drawerActiveBackgroundColor: theme.colors.primary_background,
            drawerInactiveTintColor: '#929292',
            drawerLabelStyle: {
              fontFamily: theme.fonts.medium,
              fontSize: theme.sizes.small,
              paddingLeft: 10,
            },
            drawerStyle: {
              backgroundColor: '#fff',
              paddingTop: 20,
              borderRightWidth: 2.5,
              borderColor: theme.colors.primary,
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notificações" component={NotificationConfigScreen} />
          <Drawer.Screen name="Editar eventos(administrador)" component={Auth} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
