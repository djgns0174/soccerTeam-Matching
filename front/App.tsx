import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TeamLeauge from './src/screens/team/teamLeague';
import Bar1 from './src/screens/bar1';
import Bar2 from './src/screens/bar2';
import Bar3 from './src/screens/bar3';
import MenuBar from './src/screens/menuBar';


const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://10.0.2.2:8080/api/hello') // 에뮬레이터의 경우 localhost를 10.0.2.2로 변경
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    <Bar1/>
    <Bar2/>
    <MenuBar/>
    <Bar3/>
    <TeamLeauge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
