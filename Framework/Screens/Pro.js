import { ImageBackground, StyleSheet, Text, View,Button, SafeAreaView, TouchableOpacity,Image, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { AppBotton } from '../Components/AppBotton'
import { Theme } from '../Components/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRotateBackward, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Searchbar } from 'react-native-paper';

export function Product() {
    const [search, setSearch] =useState('');

    
        const itemName = '';
        const location = ''
        const price = '';
      
        const handleAddToCart = () => {
          alert(`${itemName} has been added to your cart!`);
        }
    return (
         <SafeAreaView style={{flex:1, backgroundColor:"gold"}}>
          
            <View style={{width:"100%", height:"10%",backgroundColor:"#ffffff",flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginBottom:2}}>
               <TouchableOpacity><View>
                    <FontAwesomeIcon icon={faArrowLeft} size={20}style={{color:'#000000',margin:10}}/>
                </View></TouchableOpacity> 
                <View style={{flexDirection:'column', marginRight:40}}>
                <Text style={{ fontSize: 15, color:'black', fontFamily: Theme.fonts.text700 }}>Clothing</Text>
                    <Text style={{fontSize:17,fontFamily:Theme.fonts.text700}} >2000 Products</Text>
                </View >
                
                
                 <View><Searchbar style={{width:120,}} 
           placeholder="search"
           onChangeText={setSearch}
            /></View>
           <TouchableOpacity><View>
                  <FontAwesomeIcon icon={faHeart} size={25} style={{color:'#a49f9f'}}/>
                </View></TouchableOpacity><TouchableOpacity>
                <View>
                  <FontAwesomeIcon icon={faCartShopping} size={25} style={{color:'#a49f9f'}}/>
                </View></TouchableOpacity>


            </View><ScrollView>
<View style={{flexDirection:'row',marginBottom:2}}>
            <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container1} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        
        
        </View>

        <View style={{flexDirection:'row',marginBottom:2}}>
            <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container1} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        
        
        </View>

        <View style={{flexDirection:'row',marginBottom:2}}>
            <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container1} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        
        
        </View>

        <View style={{flexDirection:'row',marginBottom:2}}>
            <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container1} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        
        
        </View>

        <View style={{flexDirection:'row',marginBottom:2}}>
            <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        <View style={styles.box}>
            {/* Placeholder for future image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.image}
            />
            <View style={styles.container1} >
            <Text style={styles.title}>Item:{itemName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}</Text> 
      <TouchableOpacity style={{borderWidth:1,borderColor: '#3c3408',backgroundColor:'#000000bb',borderRadius: 10, width: 190, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={handleAddToCart}>
  <Text style={{fontSize: 12, color: '#cdb114',}}>Add to Cart</Text>
</TouchableOpacity>

            </View>
        </View>
        
        
        </View>

    </ScrollView>
     </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      justifyContent:'flex-start',
      alignItems: 'flex-start',
    marginTop:115,
      backgroundColor: '#e0e0e0',
      height:80,
      width:"100%"
    
    },
    container1: {
      justifyContent:'flex-start',
      alignItems: 'flex-end',
    marginTop:115,
      backgroundColor: '#e0e0e0',
      height:80,
      width:"100%"
    
    },
    title: {
      fontSize:17,
      fontWeight: 'bold',
      marginBottom: 1,
      marginTop:1,
      color:'#000000bb'
      
    },
    location: {
      fontSize: 14,
      color:'#000000bb',
      marginBottom:1,
    },
    price: {
      fontSize: 16,
      color:'#000000bb',
      
    },
    box: {
      width: '50%', 
      height: 200,
      backgroundColor: '#e0e0e0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10, 
      borderWidth: 2,
      borderColor: '#ccc', 
      flexDirection:'row'
  },
  });
  
  export default Product;
  