// myPageStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center', // Center the button horizontally
  },
  kakaoLoginButton: {
    width: 200,
    height: 50,
    backgroundColor: '#f5d505', // Correct color property for button background
    borderRadius: 10, // Rounded corners for the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    width: 200,
    height: 50,
    backgroundColor: '#007bff', // Example color for apply button
    borderRadius: 10, // Rounded corners for the button
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Space between the buttons
  },
  applyButtonText: {
    color: '#fff', // Text color for apply button
    fontWeight: 'bold',
  },
});

export default styles;