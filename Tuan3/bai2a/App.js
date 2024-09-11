import { Text, SafeAreaView, StyleSheet,View,TextInput,Image,TouchableOpacity } from 'react-native';
import {useState} from 'react'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  const [message,setMessage] = useState("")
   const handlePress = () => {
    setMessage("Login pressed!");
  };
  return (
      <LinearGradient colors={["#FBCB00","#BF9A00"]} style={styles.container}> 
         <View style={{margin:20}}>
           
          <Text style={{fontSize:30}}>Login</Text>
          
         </View>
         <View style={{gap:20,marginBottom:20}}>
           <View style={styles.inputContainer}>
            <Image source={require('./assets/avatar_user.png')} />
            <TextInput
            style={styles.input} placeholder={"Name"}/>
            </View>
           <View style={styles.inputContainer}>
            <Image source={require('./assets/lock.png')} />
            <TextInput
            style={styles.input} placeholder={"Password"}/>
            <Image source={require('./assets/eye.png')} />
            </View>
         </View>
         <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
         
         <View style={{alignItems:"center"}}>
<Text style={{color:"red"}}>{message}</Text>
         
          <Text style={{fontWeight:500,marginTop:20}}>Forgot Your Password</Text>
          
         </View>
      </LinearGradient>
    
  
  );
}
const styles = StyleSheet.create({
   container: {
     flex:1,
     padding:20,
     justifyContent:"center"
   },
   inputContainer: {
     justifyContent:"center",
     alignItems:"center",
     borderWidth:1,
     flexDirection:"row",
     padding: 10,
    
   },
   input: {
    flexGrow:1,
    marginBottom:20,
    padding: 10,
   },
   buttonText:{
      color:"#fff",
      padding:10,
      fontWeight: 'bold',
      textAlign:'center'
      
   },
   loginButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom:50
  },
  
});
