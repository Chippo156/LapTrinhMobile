import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [value,transmitReview] = useState('Gửi')

  const transmit = () => {
    transmitReview('Đã gửi')
    alert(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Image source={require('./assets/usb.png')} />
        <Text>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
      <View style={{alignItems:"center"}}>
        <Text>Cực kỳ hài lòng</Text>
        <View style={styles.review}>
          <Image source={require('./assets/Star 1.png')}/>
          <Image source={require('./assets/Star 1.png')}/>
          <Image source={require('./assets/Star 1.png')}/>
          <Image source={require('./assets/Star 1.png')}/>
          <Image source={require('./assets/Star 1.png')}/>
        </View>
      </View>
      <View style={styles.addImage}>
      <Image source={require('./assets/camera.png')}/>
      <Text>Thêm hình ảnh

      </Text>
      </View>
      <View style={styles.share}>
        <TextInput placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'></TextInput>
        <Text>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <TouchableOpacity style={styles.transmit} onPress={transmit}>
        <Text style={{color:"white",fontWeight:600}}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    padding:20,
    gap:50,

  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  review:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  addImage:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'blue',
    padding:20,
    marginTop:20,
    gap:10
  },
  share:{
    borderWidth:1,
    borderColor:'gray',
    padding:10,
    marginTop:20,
    height:250,
    alignItems: '',
    justifyContent:'space-between',
  },
  transmit:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor:'blue',
    color:'white',
    borderRadius:10,
    marginTop:20
  }


});
