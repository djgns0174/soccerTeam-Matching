import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './teamRankingStyles';

const TeamRanking = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.rankingSystemContainer}>
          <ImageBackground source={require('../../../assets/notificationIcon2.png')}
          style={styles.notifiIcon}/>
          <Text style={styles.notifiText1}>통합 순위 시스템</Text>
          <Text style={styles.notifiText2}>자세히</Text>
        </View>

        <View style={styles.sportsRow}>
          <TouchableOpacity onPress={() => setSelectedComponent('soccer')}><Text style={[
            styles.sport,
            selectedComponent === 'soccer' ? styles.selectedText : null]}>축구</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedComponent('futsal')}><Text style={[
            styles.sport,
            selectedComponent === 'futsal' ? styles.selectedText : null]}>풋살</Text></TouchableOpacity>
          
          <View style={styles.rankInfoTextContainer}>
            <Text style={styles.rankInfoText}>경기</Text>
            <Text style={styles.rankInfoText}>승리</Text>
            <Text style={styles.rankInfoText}>승률</Text>
            <Text style={styles.rankInfoText}>승점</Text>
          </View>
        </View>

        <View style={styles.rankContainerRow}>
          <View style={styles.rankContainerCol}>
            <ImageBackground source={require('../../../assets/rank1Icon.png')}
              style={styles.rankIcon}/>
            <Text style={styles.rankTeamText}>소프트웨어학과</Text>
            <View style={styles.rankInfoDataContainer}>
              <Text style={styles.rankInfoData}>144</Text>
              <Text style={styles.rankInfoData}>144</Text>
              <Text style={styles.rankInfoData}>100%</Text>
              <Text style={styles.rankInfoData}>300</Text>
            </View>
          </View>
          
          <View style={styles.rankContainerCol}>
            <ImageBackground source={require('../../../assets/rank2Icon.png')}
              style={styles.rankIcon}/>
            <Text style={styles.rankTeamText}>손흥민 FC</Text>
          </View>

          <View style={styles.rankContainerCol}>
            <ImageBackground source={require('../../../assets/rank3Icon.png')}
              style={styles.rankIcon}/>
            <Text style={styles.rankTeamText}>FC 리버풀</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TeamRanking;