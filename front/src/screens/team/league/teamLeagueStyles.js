import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  container: {
    width: '85%',
    flex: 1,
    alignSelf: 'center'
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  dateCol: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    padding: 10,
    borderRadius: 5,
  },
  dateColContent: {
    color:'black',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedDateCol: {
    borderRadius: 15,
    backgroundColor: '#007bff',
  },
  selectedDateColContent: {
    color: 'white',
  },
  sportsRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  sport: {
    fontSize: 12,
    marginRight: 15,
  },
  schedule: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: '#ccc',
  },
  matchTime: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 15,
  },
  matchDetails: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    marginRight: 15,
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
    color: 'white',
    fontSize: 10,
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
    color: 'black',
    marginLeft: 12,
  },
  footerText2: {
    fontSize: 12,
    color: 'black',
    marginLeft: 12,
  },
  createMatchButton: {
    height: 20,
    marginLeft: 12,
    marginTop: 5,
    paddingBottom: 2.5,
    paddingTop: 0,
    backgroundColor: '#28a745',
    borderRadius: 130,
  },
  createMatchButtonText: {
    fontSize: 10,
    color: 'white',
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
