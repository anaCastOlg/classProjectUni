import React, { useState } from 'react';
import styles from "../../styles/login"
import { StyleSheet, SafeAreaView, View,Image,Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props){
    const {navigation} = props;

    const goToRegister = () => {
        navigation.navigate("Registrar")
    }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
            <Image
                source={{
                uri: 'https://cdn.pixabay.com/photo/2022/07/19/05/04/landscape-7331286_1280.jpg'
                }}
                style={{width:'100%', height:'120%', resizeMode: 'cover'}}
            />
            <View style={{position:"absolute"}}>
                <Text style={styles.title}>TREVELO</Text>
            </View>
      </View>

      <View style={styles.secondSection}>
          <View>
                <View style={styles.spacing}>
                <Text style={styles.label}> Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid='#750B50'
                    placeholder='travelo@ejemplo.com'
                    keyboardType='email-address' //agrega el @ al teclado
                    returnKeyType='next' //se va al siguiente campo
                />
                </View>

                <View style={styles.spacing}>
                <Text style={styles.label}> Password</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid='#750B50'
                    placeholder='********'
                    secureTextEntry={true}
                />
                </View>

                <View style={styles.spacing}>
                <Text style={styles.forgotPassword}> Forgot Password</Text>
                </View>

                <View style={styles.spacing}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Login</Text>
                </TouchableOpacity>
                </View>
          </View>

          <View style={[styles.position, styles.row]}>
            <Text style={styles.label}>Don't have an account?</Text>
            <TouchableOpacity onPress={goToRegister}>
              <Text style={styles.singUp}>Sing up</Text>
            </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  );
}

// export const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   firstSection:{
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'green',
//     width: '100%'
    
//   },
//   secondSection:{
//     flex:2,
//     backgroundColor: '#FFF',
//     width: '100%',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     padding: 20,
//     justifyContent: 'space-between'
//   },
//   title:{
//     fontSize: 38,
//     fontWeight: 'bold',
//     color:'white'
//   },
//   label:{
//     color:'#ccc'
//   },
//   textInput:{
//     color:'#000',
//     padding: 8
//   },
//   forgotPassword:{
//     color:'#000',
//     textAlign: 'right'
//   },
//   button:{
//     backgroundColor: '#750B50',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center'
//   },
//   buttonText:{
//     color: 'white',
//     fontWeight: 'bold'
//   },
//   spacing:{
//     marginTop: 15,
//   },
//   row:{
//     flexDirection:'row',
//     justifyContent: 'center'
//   },
//   singUp:{
//     color: '#750B50',
//     fontWeight: 'bold',
//     paddingLeft: 5
//   }

// })




//export default Login



