import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import CourseCreateScreen from './src/screens/CourseCreateScreen'
import CourseDetailScreen from './src/screens/CourseDetailScreen'
import CourseListScreen from './src/screens/CourseListScreen'
import LearnerDashboardScreen from './src/screens/LearnerDashboardScreen';
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrainerHomeScreen from './src/screens/TrainerHomeScreen';
import TrainerCourseDetailScreen from './src/screens/TrainerCourseDetailScreen';
import LearnerQuizScreen from './src/screens/LearnerQuizScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,  
  }),
  learnerMainFlow: createBottomTabNavigator({
    courseListFlow: createStackNavigator({
      CourseList: CourseListScreen,
      CourseDetail: CourseDetailScreen,
      Quiz: LearnerQuizScreen
    }),
    Dashboard: LearnerDashboardScreen,
    Account: AccountScreen
  }),
  trainerMainFlow: createBottomTabNavigator({
    courseListFlow: createStackNavigator({
      CourseList: TrainerHomeScreen,
      CourseDetail: TrainerCourseDetailScreen
    }),
    CourseCreate: CourseCreateScreen,
    Account: AccountScreen
  }),
})

export default createAppContainer(switchNavigator)