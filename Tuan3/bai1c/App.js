import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Bai1 = () => {
  return (
     <LinearGradient colors={['#C7F4F6', '#D1F4F6','#E5F4F5','#00CCF9']}  style={styles.container}>
     <View style={{alignItems:'center'}}>
       <Text style={styles.headerTitle}>CODE</Text>
     </View>
     <View style={{alignItems: 'center',}}>
     <Text style={styles.title}> VERIFICATION</Text>
   
     </View>
    
      <Text style={styles.subtitle}>
        Enter ontime password sent on ++849092605798
      </Text>

      <View style={{flexDirection:'row'}}>
        <TextInput
        style={styles.input}
       
      />
       <TextInput
        style={styles.input}
       
      />
       <TextInput
        style={styles.input}
       
      />
       <TextInput
        style={styles.input}
       
      />
       <TextInput
        style={styles.input}
       
      />
       <TextInput
        style={styles.input}
       
      />
      </View>

      <View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
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
  headerTitle :{
     fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 15,
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
    height: 40,
    width:50,
   
    borderWidth: 1,
    padding: 10,
  },
})

export default Bai1;