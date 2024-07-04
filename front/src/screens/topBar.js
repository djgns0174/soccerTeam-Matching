import React from 'react';
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native';

const Bar1 = ({selectedComponent, setSelectedComponent}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>setSelectedComponent('home')}>
        <Text style={styles.title}>CLASS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedComponent('myPage')}>
        <Image
          source={require('../assets/myPageIcon.png')} 
          style={styles.mypageIcon} 
          
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width:'93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mypageIcon: {
    width: 30,
    height: 30,
  }
});

export default Bar1;