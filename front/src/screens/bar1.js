import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Bar1 = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>CLASS</Text>
      <Image 
        source={require('../assets/myPageIcon.png')} 
        style={styles.mypageIcon} 
      />
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