import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,SafeAreaView,Image,TouchableOpacity } from 'react-native';


const data = [
  {
    id: 1,
    name: 'Ca nấu lẩu ,nấu mì mini',
    provider:'Devang',
    image: require('./assets/ca_nau_lau.png'),

  },
  {
    id: 2,
    name:'1KG KHÔ GÀ',
    provider:'LTD FOOD',
    image: require('./assets/ga_bo_toi.png'),
  }
  ,{
    id: 3,
    name:'Xe cần cẩu đa năng',
    provider:'Thới giới đồ chơi',
    image:require('./assets/xa_can_cau.png'),
  }
  ,{
    id: 4,
    name:'Đồ chơi dạng mô hình',
    provider:'Thới giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  }
  ,
  {
    id:5,
    name:'Lãnh đạo giản đơn',
    provider: 'Minh Long book',
    image : require('./assets/lanh_dao_gian_don.png'),
  }
]

const Item = ({obj,image}) => (
  <View style={styles.item}>
    <View>
      <Image source={image} style={{width: 100, height: 100}} />
    </View>  
    <View style={{width:200}}>
    <Text style={styles.title}>{obj.name}</Text>
    <Text style={styles.provider}>Shop {obj.provider}</Text>
    </View>
    <TouchableOpacity style={styles.chat}>
      <Text style={{color:'white'}}>Chat</Text>
    </TouchableOpacity>
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
       <View>
         <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
       </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item obj={item} image={item.image} />}

        keyExtractor={item => item.id}
        numColumns={1}
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

 function App() {
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
       <View>
         <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
       </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item obj={item} image={item.image} />}
        keyExtractor={item => item.id}
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
    flexDirection: 'row',
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
