import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import Login from '../screens/Login/Login';
import LoginForm from '../screens/Login/LoginForm';
import QuizDetail from '../screens/Login/Heart/QuizDetail';
import QuizSolo from '../screens/Login/Heart/QuizSolo';
import Quiz from '../screens/Login/Heart/Quiz';
import Explanation from '../screens/Login/Heart/Explanation';
import Result from '../screens/Login/Heart/Result';
import PostDetail from '../screens/Home/PostDetail';
import Write from '../screens/Home/Write';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="QuizDetail" component={QuizDetail} />
      <Stack.Screen name="QuizSolo" component={QuizSolo} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Explanation" component={Explanation} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="Write" component={Write} />
    </Stack.Navigator>
  );
};

export default Navigation;