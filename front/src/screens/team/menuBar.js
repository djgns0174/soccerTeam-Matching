import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const menuBar = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setSelectedComponent('league')}
        style={[
          styles.iconWrapper,
          selectedComponent === 'league' ? styles.selectedIcon : null,
        ]}
      >
        <ImageBackground
          source={require('../../assets/leagueIcon.png')}
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.label}>리그</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedComponent('teamOneSearch')}
        style={[
          styles.iconWrapper,
          selectedComponent === 'teamOneSearch' ? styles.selectedIcon : null,
        ]}
      >
        <ImageBackground
          source={require('../../assets/teamOneSearchIcon.png')}
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.label}>팀원 모집</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedComponent('personSearch')}
        style={[
          styles.iconWrapper,
          selectedComponent === 'personSearch' ? styles.selectedIcon : null,
        ]}
      >
        <ImageBackground
          source={require('../../assets/personSearchIcon.png')}
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.label}>용병 찾기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedComponent('teamCreate')}
        style={[
          styles.iconWrapper,
          selectedComponent === 'teamCreate' ? styles.selectedIcon : null,
        ]}
      >
        <ImageBackground
          source={require('../../assets/teamCreateIcon.png')}
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.label}>팀 만들기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
  },
  iconWrapper: {
    width: 55,  
    height: 60, 
    alignItems: 'center',
    margin: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    marginTop:5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
  selectedIcon: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    width: 55 ,  
    height: 60,
  },
});

export default menuBar;
