import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './matchResultStyles'

const matchResult = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.sportsRow}>
          <TouchableOpacity onPress={() => setSelectedComponent('soccer')}><Text style={[
            styles.sport,
            selectedComponent === 'soccer' ? styles.selectedText : null
          ]}>축구</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedComponent('futsal')}><Text style={[
            styles.sport,
            selectedComponent === 'futsal' ? styles.selectedText : null
          ]}>풋살</Text></TouchableOpacity>
        </View>

        <View style={styles.schedule}>
          <Text style={styles.matchDay}>6월 25일</Text>
          <Text style={styles.matchDayOfWeek}>화</Text>
          <Text style={styles.matchTime}>17:00</Text>
          <View style={styles.matchDetails}>
            <Text style={styles.matchTeam1}>간호학과</Text>
            <Text style={styles.matchResult}>3 : 7</Text>
            <Text style={styles.matchTeam2}>소프트웨어학과</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default matchResult;