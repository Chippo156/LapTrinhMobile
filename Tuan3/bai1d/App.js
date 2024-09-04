import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Bai1 = () => {
  return (
     <View  style={styles.container}>
     
     <View style={{alignItems:'center'}}>
      <Text style={styles.title}>Login</Text>
     </View>
     <View>
      <TextInput
        style={styles.input}
         placeholder="Email"
      />
     </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>
     <TextInput
        style={styles.input}
         placeholder="Password"
      />
      <Image style={styles.imageEye} source={require('./assets/eye 1.png')}/>
     </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
     </View>
     
     <View style={{alignItems:'center',gap:10}}>
      <Text style={{fontWeight:'bold',fontSize:12}}>When you agree to terms and conditions</Text>
    <TouchableOpacity> <Text style={styles.link}>For got your password?</Text> </TouchableOpacity>
      <Text  style={{fontWeight:'bold',fontSize:12}}>Or login with </Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',borderWidth:1}}>
        <View style={styles.socialViewFb}>
          <Image source={require('./assets/icofacebook-1924510 1.png')}/>
        </View>
          <View  style={styles.socialViewZalo}>
          <Image  source={require('./assets/icozalo.png')}/>
        </View>
          <View   style={styles.socialViewGG}>
          <Image source={require('./assets/icogoogle 1.png')}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    marginBottom:40,
    gap:30,
   
    paddingHorizontal:20
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
   
  },
  loginButton: {
    backgroundColor: '#E53935',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  input: {
    backgroundColor:'#F2F2F2',
    height: 45,
    marginBottom:20,
    flex:1,
    padding: 10,
  },
  imageEye:{
    position: 'absolute',
    right:15,
    top:5
  },
  socialViewFb:{
    flex:1,
    height:60,
    width:100,
    backgroundColor:'#0680F1',
    alignItems:'center',
    justifyContent:'center',
  },
  socialViewZalo:{
    flex:1,
    height:60,
    width:100,
    backgroundColor:'blue',
     alignItems:'center',
    justifyContent:'center',
  },
  socialViewGG:{
    flex:1,
    height:60,
    width:100,
    backgroundColor:'#fff',
     alignItems:'center',
    justifyContent:'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
})

export default Bai1;