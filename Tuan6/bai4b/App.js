import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,SafeAreaView,Image,TouchableOpacity } from 'react-native';
const data = [
  {
    id: 1,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image: require('./assets/dauchuyendoi 1.png'),

  },
  {
    id: 2,
    name:'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image: require('./assets/dauchuyendoipsps2 1.png'),
  }
  ,{
    id: 3,
    name:'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image:require('./assets/giacchuyen 1.png'),
  }
  ,{
    id: 4,
    name:'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image: require('./assets/daynguon 1.png'),
  }
  ,
  {
    id:5,
    name:'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image : require('./assets/carbusbtops2 1.png'),
  },
  {
    id:6,
    name:'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    image : require('./assets/daucam 1.png'),
  }
]

const Item = ({obj,image}) => (
  <View style={styles.item}>
    
      <Image source={image} style={{width: 120, height: 120}} />
      
     
     <Text style={styles.title}>{obj.name}</Text>
      
     <View>
     <Image source={require('./assets/Group 5.png')} style={{width: 200, height: 20}} />
     </View>
    
    
    <View style={{justifyContent:'center',flexDirection:'row'}}>
        <Text>{obj.price}</Text>
        <Text> {obj.discount}</Text>
     </View>
    
  </View>
);

function Screen4a(){
  return (
    <View style={styles.container}>      
        <SafeAreaView style={styles.header}>
          <View>
          <Image source={require('./assets/ant-design_arrow-left-outlined.png')} style={styles.image} />
          </View>
          <Text style={{color:'white'}}>Chat</Text>
          <View>
          <Image source={require('./assets/bi_cart-check.png')} style={styles.image} />
          </View>
          </SafeAreaView>  
       
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item obj={item} image={item.image} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
    <SafeAreaView style={styles.header}>
          <View>
          <Image source={require('./assets/Group 10.png')} style={styles.image} />
          </View>
          <Image source={require('./assets/Vector (Stroke).png')}style={styles.image}/>

          <View>
          <Image source={require('./assets/Vector 1 (Stroke).png')} style={styles.image} />
          </View>
          
       </SafeAreaView>
    </View>
  );
}
export default Screen4a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    gap:10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  chat:{
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  
  },
  image:{
    width:25,
    height:25,
  },
  header:{
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding:100,
    height:40,
    width: '100%',
  },
  provider:{
    color: 'red',
  },
  
});
