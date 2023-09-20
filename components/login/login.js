import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Linking } from 'react-native';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes verificar las credenciales
    if (username === 'Usuario' && password === '123456') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#BEE0E9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topSection: {
      flex: 1,
      //backgroundColor: '#BEE0E9',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    bottomSection: {
      flex: 2,
      backgroundColor: 'white',
      width: '100%',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    loginText: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: -150,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginBottom: 25,
    },
    loginButton: {
      backgroundColor: '#0074CC',
      padding: 10,
      borderRadius: 5,
    },
    loginButtonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    registerText: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 150, // Espacio en blanco
    },
    registerLink: {
      color: 'blue',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </View>
      <View style={styles.bottomSection}>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles.registerText}>
          <Text>
            ¿No tienes cuenta?{' '}
            <Text style={styles.registerLink} onPress={() => {
            Linking.openURL('components\Registrar\Registrar.js');
          }}>Regístrate</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}


export default Login