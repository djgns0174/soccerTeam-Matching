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
    personSearchButton: {
        marginLeft: 120,
        backgroundColor: '#f5d505',
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 2.5,
    },
    personSearchButtonText: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 10,
    },  
    dataContainer:{
        justifyContent:'center',
        marginTop:20,
    },
    scheduleHeaderCol: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15,
    },
    matchDay:{
        fontWeight:'bold',
        marginLeft:15,
        color:'black',
        fontSize: 15.5,
        marginRight:130,
    },
    viewIcon:{
        width:20,
        height:20,
    },
    heartIcon:{
        marginLeft:10,
        width:15,
        height:15,
    },
    scheduleBodyCol: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    matchTime: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    matchLocation: {
        fontSize: 13,
        color: 'black',
    },
    memberNumberDataContainer:{
        marginRight:2,
        marginTop: 5,
        marginLeft: 10,
        flexDirection:'row',
        backgroundColor:'#def0fa', 
        borderRadius:5, 
        justifyContent:'center', 
        alignItems:'center',
        width:35,
    },
    memberNumberData:{
        fontSize:10,
        color:'#007bff',
    },
    applyButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 2.5,
        marginLeft: 15,
    },
    applyButtonText: {
        color: 'white',
        fontSize: 10,
    },
});

export default styles;