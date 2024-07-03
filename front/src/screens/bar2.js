import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Bar2 = () => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.team}>팀</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.reservation}>구장 예약</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.community}>커뮤니티</Text>
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
});

export default Bar2;
