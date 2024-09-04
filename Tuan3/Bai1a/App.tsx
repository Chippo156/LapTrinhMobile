
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Bai1 = () => {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6','#E5F4F5','#00CCF9']}  style={styles.container}>
    <Image source={require('./imgs/Ellipse 8.png')} />
    <Text style={styles.title}>FORGET PASSWORD</Text>
    
      <Text style={styles.subtitle}>
      Provide your account’s email for which you want to reset your password
      </Text>
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontWeight:'bold',fontSize:16}}>HOW WE WORKS?</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:40,
    backgroundColor:'#00CCF9'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
    marginTop:40
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    marginBottom: 40,
    fontWeight: 'bold',
  },
 
 buttonContainer: {
    flexDirection: 'row',
    gap:50
  },
  loginButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Bai1;
