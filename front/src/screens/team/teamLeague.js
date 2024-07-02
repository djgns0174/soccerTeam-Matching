import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Index } from 'typeorm';

const TeamLeague = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.dateRow}>
          <TouchableOpacity><Text style={styles.sport}>축구</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.sport}>풋살</Text></TouchableOpacity>
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
      </View>
      <ImageBackground source={require('../../assets/sonImage.jpg')} style={styles.sonImage}>
        <View style={styles.footer}>
          <Text style={styles.footerText1}>원하는 매치가 없다면</Text>
          <Text style={styles.footerText2}>매치를 만들어 보세요</Text>
          <Button title="매치 생성" buttonStyle={styles.createMatchButton} titleStyle={styles.createMatchButtonText}/>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView:{
    width:'100%',
  },
  container: {
    width:'100%',
    flex:1,
  },
  dateRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent:'flex-start',
  },
  sport: {
    fontSize: 12,
    marginRight:15,
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
  sonImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  footerText1: {
    fontSize: 10,
    color:'black',
    marginLeft:12,
  },
  footerText2: {
    fontSize: 12,
    color:'black',
    marginLeft:12,
  },
  createMatchButton: {
    height:20,
    marginLeft:12,
    marginTop:5,
    paddingBottom: 2.5,
    paddingTop: 0,
    backgroundColor: '#28a745',
    borderRadius: 130,
  },
  createMatchButtonText:{
    fontSize:10,
    color:'white',
  }
});

export default TeamLeague;
