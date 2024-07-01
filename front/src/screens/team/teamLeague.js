import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const teamLeague = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="team" type="font-awesome" size={24} />
          <Text>팀</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="reservation" type="font-awesome" size={24} />
          <Text>구장 예약</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="comunity" type="font-awesome" size={24} />
          <Text>커뮤니티</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleHeader}>
        <Text style={styles.scheduleTitle}>일정</Text>
        <Text style={styles.scheduleTitle}>경기 결과</Text>
        <Text style={styles.scheduleTitle}>팀 순위</Text>
      </View>

      <View style={styles.dateRow}>
        <Text style={styles.sport}>축구</Text>
        <Text style={styles.sport}>풋살</Text>
      </View>

      <View style={styles.schedule}>
        <Text style={styles.time}>17:00 - 19:00</Text>
        <Text style={styles.venue}>종합운동장</Text>
        <Text style={styles.match}>실업 팀 VS 초등부 예선</Text>
        <Button title="신청 가능" buttonStyle={styles.applyButton} />
      </View>

      <View style={styles.schedule}>
        <Text style={styles.time}>17:00 - 19:00</Text>
        <Text style={styles.venue}>종합운동장</Text>
        <Text style={styles.match}>강원 팀 VS 초등부 예선</Text>
        <Button title="신청 가능" buttonStyle={styles.applyButton} />
      </View>

      <Image source={{ uri: 'https://path-to-image.jpg' }} style={styles.image} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>원하는 매치가 없다면 매치를 만들어 보내세요</Text>
        <Button title="매치 생성" buttonStyle={styles.createMatchButton} />
      </View>

      <View style={styles.navFooter}>
        <Text style={styles.navFooterText}>CLASS</Text>
        <Text style={styles.navFooterText}>Topic</Text>
        <Text style={styles.navFooterText}>Topic</Text>
        <Text style={styles.navFooterText}>Topic</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItem: {
    alignItems: 'center',
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dateItem: {
    alignItems: 'center',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateDay: {
    fontSize: 14,
    color: '#555',
  },
  sport: {
    fontSize: 14,
    color: '#555',
  },
  schedule: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  venue: {
    fontSize: 14,
    color: '#555',
  },
  match: {
    fontSize: 14,
    marginVertical: 5,
  },
  applyButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  createMatchButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  navFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navFooterText: {
    fontSize: 16,
    color: '#555',
  },
});

export default teamLeague;
