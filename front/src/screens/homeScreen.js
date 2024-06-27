import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.scheduleContainer}>
        <Text style={styles.date}>25</Text>
        <Text style={styles.day}>목</Text>
        <View style={styles.scheduleItem}>
          <Text style={styles.time}>17:00 - 19:00</Text>
          <Text style={styles.location}>종합운동장</Text>
          <Text style={styles.status}>신청 가능</Text>
          <Button title="신청 가능" onPress={() => {}} />
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.time}>17:00 - 19:00</Text>
          <Text style={styles.location}>종합운동장</Text>
          <Text style={styles.status}>신청 가능</Text>
          <Button title="신청 가능" onPress={() => {}} />
        </View>
      </View>
      <Image
        source={{ uri: 'https://example.com/son-heung-min.jpg' }}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  scheduleContainer: {
    width: '100%',
    padding: 20,
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 20,
  },
  scheduleItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  time: {
    fontSize: 16,
  },
  location: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: 'green',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
});

export default HomeScreen;
