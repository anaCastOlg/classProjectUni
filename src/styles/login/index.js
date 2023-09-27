import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
      },
      firstSection:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: '100%'
        
      },
      secondSection:{
        flex:2,
        backgroundColor: '#FFF',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        justifyContent: 'space-between'
      },
      title:{
        fontSize: 38,
        fontWeight: 'bold',
        color:'white'
      },
      label:{
        color:'#ccc'
      },
      textInput:{
        color:'#000',
        padding: 8
      },
      forgotPassword:{
        color:'#000',
        textAlign: 'right'
      },
      button:{
        backgroundColor: '#750B50',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center'
      },
      buttonText:{
        color: 'white',
        fontWeight: 'bold'
      },
      spacing:{
        marginTop: 15,
      },
      row:{
        flexDirection:'row',
        justifyContent: 'center'
      },
      singUp:{
        color: '#750B50',
        fontWeight: 'bold',
        paddingLeft: 5
      }
})