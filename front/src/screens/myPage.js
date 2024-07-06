import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './myPageStyles';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';

const MyPage = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.kakaoLoginButton} onPress={()=>login()}>
        <Text style={styles.buttonText}>KAKAO LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const login = () => {
  KakaoLogin.login().then((result) => {
      console.log("Login Success", JSON.stringify(result));
      getProfile();
  }).catch((error) => {
      if (error.code === 'E_CANCELLED_OPERATION') {
          console.log("Login Cancel", error.message);
      } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
      }
  });
};

export default MyPage;