import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const bar3 = (setSelectedComponent) => {
  return (
      <View style={styles.scheduleHeader}>
        <TouchableOpacity onPress={()=>setSelectedComponent('teamLeague')}>
          <Text style={styles.scheduleTitle}>일정</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelectedComponent('matchResult')}>
          <Text style={styles.scheduleTitle}>경기 결과</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelectedComponent('teamRanking')}>
          <Text style={styles.scheduleTitle}>팀 순위</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  scheduleHeader: {
    width:'88%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom:10
  },
  scheduleTitle: {
    marginRight: 15,
    fontSize: 12,
  },
});

export default bar3;
