// MyPage.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './myPageStyles';
import { Button } from 'react-native-elements';

const MyPage = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <View style={styles.container}>
      <Button title="KAKAO LOGIN" buttonStyle={styles.kakaoLoginButton} />
      <Text>asdfasdf</Text>
      <Button title="신청 가능" buttonStyle={styles.applyButton} titleStyle={styles.applyButtonText} />
    </View>
  );
};

export default MyPage;
