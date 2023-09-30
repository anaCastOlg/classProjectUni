import React, { useState, useEffect } from 'react';
import styles from "../../styles/register"
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Linking,Image, Platform, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import Constants from 'expo-contants';
import { StatusBar } from 'expo-status-bar';

export default function Registrar(props) {

  const {navigation} = props;

    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const [image,setImage] = useState(null);

    useEffect( async () => {
        if(Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permiso denegado!!!')
            }
        }
    },[]) 

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[4,3],
            quality:1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

  return (
    
      <View style={styles.container}>

        
            <View style={styles.secondSection}>

              <View style={styles.spacing}>
                  <Text style={styles.RegisterText}>REGISTRATE</Text>
              </View>

              <View>
              <ScrollView>
              <View style={styles.spacingImg}>
                      <TouchableOpacity style={styles.buttonImg}>
                          <Text style={styles.buttonTextImg} onPress={PickImage}> Escoge tu imagen </Text>
                          {image && <Image source={{uri:image}} style={styles.imagenUser} />}
                      </TouchableOpacity>

                      {/* <Button title="Escoge tu imagen" onPress={PickImage} /> */}
                      
                      <StatusBar style='auto' />
                  </View>
                  <View style={styles.spacing}>
                      <Text style={styles.label}> Full Name</Text>
                      <TextInput
                          style={styles.textInput}
                          underlineColorAndroid='#750B50'
                          placeholder='Ana Castañeda'
                          returnKeyType='next' //se va al siguiente campo
                      />
                  </View>
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
                          returnKeyType='next'
                      />
                  </View>
                  <View style={styles.spacing}>
                      <Text style={styles.label}> Confirmar Password</Text>
                      <TextInput
                          style={styles.textInput}
                          underlineColorAndroid='#750B50'
                          placeholder='********'
                          secureTextEntry={true}
                      />
                  </View>

                  

                  <View style={styles.spacing}>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttonText}> Registrarse </Text>
                      </TouchableOpacity>
                  </View>
                  </ScrollView>
              </View>
              

              <View style={[styles.position, styles.row]}>
                  <Text style={styles.label}>Don't have an account?</Text>
                  <TouchableOpacity onPress={goToLogin}>
                      <Text style={styles.singIn}>Iniciar Sesión</Text>
                  </TouchableOpacity>
              </View>
              
          </View>
        

          
      </View>
     
  );
}

//export default Registrar
