import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Bar3 = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <View style={styles.scheduleHeader}>
      <TouchableOpacity onPress={() => setSelectedComponent('teamLeague')}>
        <Text style={[
          styles.scheduleTitle,
          selectedComponent === 'teamLeague' ? styles.selectedText : null
        ]}>일정</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedComponent('matchResult')}>
        <Text style={[
          styles.scheduleTitle,
          selectedComponent === 'matchResult' ? styles.selectedText : null
        ]}>경기 결과</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedComponent('teamRanking')}>
        <Text style={[
          styles.scheduleTitle,
          selectedComponent === 'teamRanking' ? styles.selectedText : null
        ]}>팀 순위</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleHeader: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  scheduleTitle: {
    marginRight: 15,
    fontSize: 12,
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Bar3;