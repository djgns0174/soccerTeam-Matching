import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const TeamLeague = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.dateRow}>
          <TouchableOpacity><Text style={styles.sport}>축구</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.sport}>풋살</Text></TouchableOpacity>
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
    width:'85%',
    flex:1,
    alignSelf:'center'
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
    flexDirection: 'row',
    justifyContent: 'center' ,
    alignItems: 'center', 
    padding: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: '#ccc',
  },
  matchTime: {
    color:'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight:15
  },
  matchDetails: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    marginRight:15
  },
  matchLocation: {
    fontSize: 12,
    color: 'black',
  },
  matchTeams: {
    fontSize: 11,
    marginVertical: 5,
  },
  applyButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 2.5,
  },
  applyButtonText: {
    color:'white',
    fontSize:10,
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
