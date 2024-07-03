import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Bar2 = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => setSelectedComponent('team')} style={styles.menuItem}>
        <Text style={[
          styles.team,
          selectedComponent === 'team' ? styles.selectedText : null
        ]}>팀</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedComponent('reservation')} style={styles.menuItem}>
        <Text style={[
          styles.reservation,
          selectedComponent === 'reservation' ? styles.selectedText : null
        ]}>구장 예약</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedComponent('community')} style={styles.menuItem}>
        <Text style={[
          styles.community,
          selectedComponent === 'community' ? styles.selectedText:null
          ]}>커뮤니티</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  menuItem: {
    marginRight: 15,
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Bar2;
