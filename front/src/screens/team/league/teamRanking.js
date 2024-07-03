import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './teamRankingStyles';

const TeamRanking = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.sportsRow}>
          <TouchableOpacity onPress={() => setSelectedComponent('soccer')}><Text style={[
            styles.sport,
            selectedComponent === 'soccer' ? styles.selectedText : null]}>축구</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedComponent('futsal')}><Text style={[
            styles.sport,
            selectedComponent === 'futsal' ? styles.selectedText : null]}>풋살</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


export default TeamRanking;
