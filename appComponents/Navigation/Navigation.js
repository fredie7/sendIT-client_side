import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Homescreen from '../Homescreen/Homescreen'
import { faHome,faSignInAlt,faSignOutAlt,faPager } from '@fortawesome/free-solid-svg-icons'
import Profilescreen from '../Profilescreen/Profilescreen'
import Signinscreen from '../Signinscreen/Signinscreen'
import Signupscreen from '../Signupscreen/Signupscreen'

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator 
          initialRouteName='Home'
          tabBarOptions={{
            activeTintColor: '#e91e63'
          }}
        >
          <Tab.Screen name='Home' component={Homescreen} options={{
            tabBarLabel: 'Homescreen',
            tabBarIcon: ({ color,size })=>(<FontAwesomeIcon icon={faHome}/>)
          }}/>
          <Tab.Screen name='Profile' component={Profilescreen} options={{
            tabBarLabel: 'Profilescreen',
            tabBarIcon: ({ color,size })=>(<FontAwesomeIcon icon={faSignInAlt}/>)
          }}/>
          <Tab.Screen name='Signin' component={Signinscreen} options={{
            tabBarLabel: 'Signincreen',
            tabBarIcon: ({ color,size })=>(<FontAwesomeIcon icon={faSignOutAlt}/>)
          }}/>
          <Tab.Screen name='Signup' component={Signupscreen} options={{
            tabBarLabel: 'Signupscreen',
            tabBarIcon: ({ color,size })=>(<FontAwesomeIcon icon={faPager}/>)
          }}/>
        </Tab.Navigator>
    )
}

export default Navigation
