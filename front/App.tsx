import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import Bar1 from './src/screens/topBar';
import Bar2 from './src/screens/bar2';
import Bar3 from './src/screens/team/league/bar3';
import MenuBar from './src/screens/team/menuBar';
import TeamLeague from './src/screens/team/league/teamLeague';
import MatchResult from './src/screens/team/league/matchResult';
import TeamRanking from './src/screens/team/league/teamRanking';
import TeamOneSearch from './src/screens/team/teamOneSearch/teamOneSearch';
import PersonSearch from './src/screens/team/personSearch/personSearch';

const App = () => {
  const [bar2Component, setBar2Component] = useState('team');
  const [bar3Component, setBar3Component] = useState('teamLeague');
  const [menuBarComponent, setMenuBarComponent] = useState('league');
  const [sportsComponent, setSportsComponent] = useState('soccer');


  const renderComponent = () => {
    if (menuBarComponent === 'league') {
      return (
        <>
          <Bar3 setSelectedComponent={setBar3Component} selectedComponent={bar3Component} />
          {bar3Component === 'teamLeague' && (
            <TeamLeague setSelectedComponent={setSportsComponent} selectedComponent={sportsComponent} />
          )}
          {bar3Component === 'matchResult' && (
            <MatchResult setSelectedComponent={setSportsComponent} selectedComponent={sportsComponent} />
          )}
          {bar3Component === 'teamRanking' && (
            <TeamRanking setSelectedComponent={setSportsComponent} selectedComponent={sportsComponent} />
          )}
        </>
      );
    } else if(menuBarComponent === 'teamOneSearch'){
      return(
        <TeamOneSearch selectedComponent={sportsComponent} setSelectedComponent={setSportsComponent}/>
      );
    } else if(menuBarComponent === 'personSearch'){
      return(
        <PersonSearch selectedComponent={sportsComponent} setSelectedComponent={setSportsComponent}/>
      );
    } else if(menuBarComponent === 'teamCreate'){
      
    }
  };

  return (
    <View style={styles.container}>
      <Bar1 />
      <MenuBar setSelectedComponent={setMenuBarComponent} selectedComponent={menuBarComponent} />
      {renderComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default App;
