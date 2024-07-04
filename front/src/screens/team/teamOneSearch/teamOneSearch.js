import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './teamOneSearchStyles';

const TeamOneSearch = ({ selectedComponent, setSelectedComponent }) => {
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
                
                <Button title="팀원 모집하기" buttonStyle={styles.TeamOneSearchButton} titleStyle={styles.TeamOneSearchButtonText} />
            </View>
        </View>
    </ScrollView>
  );
};

export default TeamOneSearch;