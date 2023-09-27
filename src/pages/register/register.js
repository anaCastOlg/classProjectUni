import React, { useState } from 'react';
import styles from "../../styles/register"
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Linking } from 'react-native';

export default function Registrar(props) {

  const {navigation} = props;

    const goToLogin = () => {
        navigation.navigate("Login")
    }

  return (
      <View style={styles.container}>
          <View style={styles.secondSection}>

              <View >
                  <Text style={styles.RegisterText}>REGISTRATE</Text>
              </View>

              <View>
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
