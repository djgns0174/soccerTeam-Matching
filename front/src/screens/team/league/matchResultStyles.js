import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollView:{
      width:'100%',
    },
    container: {
      width:'85%',
      flex:1,
      alignSelf:'center'
    },
    sportsRow: {
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
    matchDay:{
      color:'black',
      fontSize: 13,
      marginRight:15
    }, 
    matchDayOfWeek:{
      color:'black',
      fontSize: 13,
      marginRight:15
    },
    matchTime: {
      color:'black',
      fontSize: 14,
      marginRight:15
    },
    matchDetails: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    matchTeam1: {
      color:'black',
      fontSize: 14,
      marginRight: 5,
      marginVertical: 5,
      fontWeight: 'bold',
    },
    matchTeam2: {
      color:'black',
      fontSize: 14,
      marginVertical: 5,
      fontWeight: 'bold',
    },
    matchResult:{
      color:'black',
      fontSize: 15,
      marginRight: 5,
      fontWeight: 'bold',
    },
    selectedText: {
      color: 'black',
      fontWeight: 'bold',
    },
  });

  export default styles;