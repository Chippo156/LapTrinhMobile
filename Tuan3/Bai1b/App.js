import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Bai1 = () => {
  return (
     <LinearGradient colors={['#C7F4F6', '#D1F4F6','#E5F4F5','#00CCF9']}  style={styles.container}>
     <View style={{alignItems:'center'}}><Image source={require('./assets/lock-152879 1.png')} /></View>
     <View style={{alignItems: 'center',}}>
     <Text style={styles.title}> FORGET</Text>
     <Text style={styles.title}>PASSWORD</Text>
     </View>
    
      <Text style={styles.subtitle}>
        Provide your account’s email for which you want to reset your password
      </Text>

      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/2744492898368.png')} />
      <TextInput
        style={styles.input}
      /></View>

      <View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
     </View>
     
     <View style={{alignItems:'center'}}>
      <Text style={{fontWeight:'bold',fontSize:16}}>HOW WE WORKS?</Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap:40,
    backgroundColor:'#00CCF9',
    paddingHorizontal:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
   
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  input: {
    backgroundColor:'#C4C4C4',
    height: 45,
    marginBottom:20,
    flex:1,
    padding: 10,
  },
})

export default Bai1;