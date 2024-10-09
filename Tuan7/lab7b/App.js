import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View ,Image} from 'react-native';

export default function productDetails({navigation}){
    return (
        <View style={[styles.container,{flex:1}]}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./assets/donut_yellow 1.png')} style={{width:200,height:200}}/>
            </View>
            <View>
                <Text>
                    Donut
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>
                    Donut is a small circular
                </Text>
                <Text>
                $20.00
                </Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                <View>
                    <Image source={require('./assets/Vector.png')} style={{width:20,height:20}}/>
                    <View>
                        <Text>
                            Delivery on 30 min
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignContent:'center',gap:10}}>
                    <TouchableOpacity>
                        <Image source={require('./assets/Group 15.png')} style={{width:20,height:20}}/>
                    </TouchableOpacity>
                    <Text>15</Text>
      
                    <TouchableOpacity>
                        <Image source={require('./assets/Group 15.png')} style={{width:20,height:20}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>
                Restaurants info
                </Text>
                <Text>
                Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
                </Text>
            </View>
            <TouchableOpacity style={styles.addToCart}>
                <Text>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

 function Screen1() {
     
    const getProducts = async () => { 
        try{
            let response = await fetch('https://66fc8f39c3a184a84d174f4d.mockapi.io/bake');
            let json = await response.json();
            setProducts(json);
        }
        catch(error){
            console.error(error);
        }
        
    }
    const createProduct = async () => {
        try{
            let response = await fetch('https://66fc8f39c3a184a84d174f4d.mockapi.io/bake',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                     
            i )
            });
            let json = await response.json();
        }
        catch(error){
            console.error(error);
        }
    }
    
    useEffect(() => {  
        getProducts();
    },[]);

    const [products,setProducts] = useState([]);

    const Item = ({obj}) => {
        return (
            <View style={styles.product}>
                <Image source={`../assets/${obj.img}`} style={{width:50,height:50}}/>
                <View style={{flexDirection:'column' , gap:10}}>
                    <Text>{obj.title}</Text>
                    <Text >{obj.desc}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>{obj.price}</Text> 
                    <Image style={{ width: 40, height: 40 }} source={require('./assets/plus_button.png')} />
                    </View>
                </View>
            </View>
        )
    }

    return ( 
        <View style={styles.container}>
            <View>
                <Text>Welcome,Jata</Text>
                <Text>Choice you Best food</Text>
            </View>
            <View style={{flexDirection:'row', borderWidth:1,borderColor:'#000',padding:10,alignItems: "center"}}>
                <TextInput style={{border: 'none'}} placeholder='Search food'>  
                </TextInput>
                <Image  style={{ width: 20, height: 20 }} source={require('./assets/Group 18.png')} />
            </View>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text>Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text>Pink Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text>Floating</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
             data={products}
             renderItem={({item}) => <Item obj={item}></Item>}
             keyExtractor={item => item.id}
            ></FlatList>

        </View>
    );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:20,
        marginTop:20,
        justifyContent:'center',
       
        gap:30,
    },
    nav:{
        flexDirection:'row',
        padding:10,
    },
    menuItem:{
        padding:10,
        backgroundColor:'#F1B000',
        borderRadius:10,
    },
    product:{
        flexDirection:'row',
        padding:10,
        borderWidth:1,
        borderColor:'#000',
        borderRadius:10,
        width:'100%',
        alignItems:'center',
        marginBottom:10
    },
    addToCart:{
        backgroundColor:'#F1B000',
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }
});