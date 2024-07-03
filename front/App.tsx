import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import Bar1 from './src/screens/bar1';
import Bar2 from './src/screens/bar2';
import Bar3 from './src/screens/team/bar3';
import MenuBar from './src/screens/team/menuBar';
import TeamLeague from './src/screens/team/teamLeague';
import MatchResult from './src/screens/team/matchResult';
import TeamRanking from './src/screens/team/teamRanking';

const App = () => {
  const [message, setMessage] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('teamLeague');

  const renderComponent = () => {
    if (selectedComponent === 'teamLeague') {
      return <TeamLeague />;
    } else if (selectedComponent === 'matchResult') {
      return <MatchResult />;
    } else if (selectedComponent === 'teamRanking') {
      return <TeamRanking />;
    }
  };

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
      <Bar1 />
      <Bar2 />
      <MenuBar />
      <Bar3 setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} />
      {renderComponent()}
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
