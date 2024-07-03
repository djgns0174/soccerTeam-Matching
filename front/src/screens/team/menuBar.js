import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const menuBar = () => {
return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconWrapper}>
            <ImageBackground source={require('../assets/leagueIcon.png')} style={styles.image}></ImageBackground>
            <Text style={styles.label}>리그</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
            <ImageBackground source={require('../assets/teamSearch.jpg')} style={styles.image}></ImageBackground>
            <Text style={styles.label}>팀원 모집</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
            <ImageBackground source={require('../assets/personSearchIcon.png')} style={styles.image}></ImageBackground>
            <Text style={styles.label}>용병 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
            <ImageBackground source={require('../assets/teamCreateIcon.png')} style={styles.image}></ImageBackground>
            <Text style={styles.label}>팀 만들기</Text>
        </TouchableOpacity>
    </View>
);};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 12,
    },
    iconWrapper: {
      alignItems: 'center',
      margin:12,
      marginLeft:20,
      marginRight:20
    },
    image: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      marginTop: 5,
      fontSize: 12,
      textAlign: 'center',
      color: 'black', // 배경 이미지 위에 텍스트가 잘 보이도록 색상 설정
    },
  });

export default menuBar;
