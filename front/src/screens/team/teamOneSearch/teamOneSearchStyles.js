import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollView:{
      width:'100%',
    },
    container: {
      width:'80%',
      flex:1,
      alignSelf:'center'
    },
    sportsRow: {
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginLeft:30,
    },
    sport: {
      fontSize: 12,
      marginRight:15,
    },
    selectedText: {
      color: 'black',
      fontWeight: 'bold',
    },
    TeamOneSearchButton: {
        marginLeft: 120,
        backgroundColor: '#f5d505',
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 2.5,
    },
    TeamOneSearchButtonText: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 10,
    },
});

export default styles;