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
    rankingSystemContainer: {
      flexDirection:'row',
      width:'60%',
      backgroundColor: '#f2ebeb',
      borderRadius: 5,
      alignSelf: 'center',
      height: 25,
      marginTop:5,
    },
    notifiIcon: {
      marginTop:5,
      width: 16,
      height: 16,
      marginLeft: 10,
    },
    notifiText1:{
      marginLeft: 8,
      marginTop: 3,
      fontSize:12,
    },    
    notifiText2:{
      color:"black",
      marginLeft: 8,
      marginTop: 3,
      fontSize:12,
    },
    sportsRow: {
      flexDirection: 'row',
      paddingVertical: 10,
      justifyContent:'flex-start',
      marginLeft:20,
    },
    sport: {
      fontSize: 12,
      marginRight:15,
    },
    selectedText: {
      color: 'black',
      fontWeight: 'bold',
    },
    rankInfoTextContainer:{
      marginLeft:90,
      flexDirection:'row',
    },
    rankInfoText :{
      fontSize:10,
      marginRight:10,
      marginTop:2,
    },
    rankContainerRow: {
      marginLeft:25,
      width:'80%',
      flexDirection: 'col',
    },
    rankContainerCol: {
      width:'100%',
      flexDirection: 'row',
      alignItems: 'center', 
      borderBottomWidth: 0.8,
      borderBottomColor: '#ccc',
      paddingTop:7,
      paddingBottom:10,
    },
    rankIcon:{
      marginTop:3,
      width: 20,
      height: 20,
      marginRight: 15,
    },
    rankTeamText: {
      color:'black',
      fontSize: 13,
      fontWeight: 'bold',
    },
    rankInfoDataContainer:{
      marginLeft:40,
      flexDirection:'row',
    },
    rankInfoData:{
      fontSize:10,
      marginRight:10,
      marginTop:2,
    },
  });
  
  export default styles;