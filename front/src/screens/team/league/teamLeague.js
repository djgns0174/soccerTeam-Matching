import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './teamLeagueStyles';

const TeamLeague = ({ selectedComponent, setSelectedComponent }) => {
  const [selectedDate, setSelectedDate] = useState('25');

  const dates = [
    { day: '25', dayOfWeek: '화' },
    { day: '26', dayOfWeek: '수' },
    { day: '27', dayOfWeek: '목' },
    { day: '28', dayOfWeek: '금' },
    { day: '29', dayOfWeek: '토' },
    { day: '30', dayOfWeek: '일' },
    { day: '1', dayOfWeek: '월' },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.dateRow}>
          {dates.map((date) => (
            <TouchableOpacity
              key={date.day}
              style={[
                styles.dateCol,
                selectedDate === date.day && styles.selectedDateCol,
              ]}
              onPress={() => setSelectedDate(date.day)}
            >
              <Text
                style={[
                  styles.dateColContent,
                  selectedDate === date.day && styles.selectedDateColContent,
                ]}
              >
                {date.day}
              </Text>
              <Text
                style={[
                  styles.dateColContent,
                  selectedDate === date.day && styles.selectedDateColContent,
                ]}
              >
                {date.dayOfWeek}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sportsRow}>
          <TouchableOpacity onPress={() => setSelectedComponent('soccer')}>
            <Text style={[
              styles.sport,
              selectedComponent === 'soccer' ? styles.selectedText : null
            ]}>축구</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedComponent('futsal')}>
            <Text style={[
              styles.sport,
              selectedComponent === 'futsal' ? styles.selectedText : null
            ]}>풋살</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.schedule}>
          <Text style={styles.matchTime}>17:00 - 19:00</Text>
          <View style={styles.matchDetails}>
            <Text style={styles.matchLocation}>종합운동장</Text>
            <Text style={styles.matchTeams}>미정 VS 소프트웨어학과</Text>
          </View>
          <Button title="신청 가능" buttonStyle={styles.applyButton} titleStyle={styles.applyButtonText} />
        </View>

        <View style={styles.schedule}>
          <Text style={styles.matchTime}>17:00 - 19:00</Text>
          <View style={styles.matchDetails}>
            <Text style={styles.matchLocation}>종합운동장</Text>
            <Text style={styles.matchTeams}>간호학과 VS 소프트웨어학과</Text>
          </View>
          <Button title="신청 가능" buttonStyle={styles.applyButton} titleStyle={styles.applyButtonText} />
        </View>
      </View>
      <ImageBackground source={require('../../../assets/sonImage.jpg')} style={styles.sonImage}>
        <View style={styles.footer}>
          <Text style={styles.footerText1}>원하는 매치가 없다면</Text>
          <Text style={styles.footerText2}>매치를 만들어 보세요</Text>
          <Button title="매치 생성" buttonStyle={styles.createMatchButton} titleStyle={styles.createMatchButtonText}/>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default TeamLeague;
