import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './personSearchStyles';

const personSearch = ({ selectedComponent, setSelectedComponent }) => {
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
                
                <Button title="용병 모집하기" buttonStyle={styles.personSearchButton} titleStyle={styles.personSearchButtonText} />
            </View>
            
            <View style={styles.dataContainer}>
                <View style={styles.schedule}>
                    <View style={styles.scheduleHeaderCol}>
                        <Text style={styles.matchDay}>6월 27일 목요일</Text>
                        <ImageBackground source={require('../../../assets/viewIcon.png')} style={styles.viewIcon}/>
                        <Text style={{fontSize:10,}}>30</Text>
                        <ImageBackground source={require('../../../assets/heartIcon.png')} style={styles.heartIcon}/>
                        <Text style={{fontSize:10,}}>2</Text>
                    </View>

                    <View style={styles.scheduleBodyCol}>
                        <Text style={styles.matchTime}>17:00 - 19:00</Text>
                        <Text style={styles.matchLocation}>종합운동장</Text>
                        <View style={styles.memberNumberDataContainer}>
                            <ImageBackground source={require('../../../assets/memberNumberIcon.png')} 
                                style={{width:15, height:15,}}
                            />
                            <Text style={styles.memberNumberData}>3</Text>
                            <Text style={styles.memberNumberData}>/</Text>
                            <Text style={styles.memberNumberData}>5</Text>
                        </View>
                        <Button title="신청 가능" buttonStyle={styles.applyButton} titleStyle={styles.applyButtonText} />
                    </View>
                </View>

                <View style={styles.schedule}>
                    <View style={styles.scheduleHeaderCol}>
                        <Text style={styles.matchDay}>6월 27일 목요일</Text>
                        <ImageBackground source={require('../../../assets/viewIcon.png')} style={styles.viewIcon}/>
                        <Text style={{fontSize:10,}}>30</Text>
                        <ImageBackground source={require('../../../assets/heartIcon.png')} style={styles.heartIcon}/>
                        <Text style={{fontSize:10,}}>2</Text>
                    </View>

                    <View style={styles.scheduleBodyCol}>
                        <Text style={styles.matchTime}>17:00 - 19:00</Text>
                        <Text style={styles.matchLocation}>종합운동장</Text>
                        <View style={styles.memberNumberDataContainer}>
                            <ImageBackground source={require('../../../assets/memberNumberIcon.png')} 
                                style={{width:15, height:15,}}
                            />
                            <Text style={styles.memberNumberData}>3</Text>
                            <Text style={styles.memberNumberData}>/</Text>
                            <Text style={styles.memberNumberData}>5</Text>
                        </View>
                        <Button title="신청 가능" buttonStyle={styles.applyButton} titleStyle={styles.applyButtonText} />
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
  );
};

export default personSearch;