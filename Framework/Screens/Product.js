import { faLess } from "@fortawesome/free-brands-svg-icons";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { ScrollView, View,SafeAreaView,Image,Text,TouchableOpacity } from "react-native";
import { Theme } from "../Components/Theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export  function ProductA(){
    const [Price, setPrice]= useState('10,000')
    const [size, setSize]= useState('10')
    const [color, setColor]= useState('Black')
    const [name, setName]=useState('Jacket')

    const handleAddToCart = () => {
        alert(`${name} has been added to your cart!`);
      }

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#8000804d',}}>

<View style={{ flex: 1, justifyContent: 'space-between' }}>
<ScrollView>


     <View style={{width:"100%",height:400,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{alignItems:'center'}}>
     <Text style={{ fontFamily: Theme.fonts.text900, fontSize:30,color:Theme.colors.primary}}>{name}</Text>

     <Text style={{ fontFamily: Theme.fonts.text400, fontSize:20,color:"purple"}}> Elevate Your Style with Our Sleek Jacket</Text>
</View>

<View style={{height:400}}>
<ScrollView horizontal style={{}}>

   <Image source={require("../../assets/jacket.jpg")} style={{ width:400, height:400,}}/>

   <Image source={require("../../assets/jacket.jpg")} style={{ width:400, height:400,}}/>

   <Image source={require("../../assets/jacket.jpg")} style={{ width:400, height:400,}}/>
  
               </ScrollView>
                </View>

    <View style={{backgroundColor:'white', width:"100%",height:70,marginTop:3,}}>
        <View style={{height:70, width:"100%", borderRadius:5,backgroundColor:"white"}}>
   
   <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:20,color:'#000000'}}>Price:</Text>
    <Text style={{fontFamily:Theme.fonts.text900,fontSize:20,color:Theme.colors.primary}}>{Price}</Text>
    </View>

    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:20,color:'#000000'}}>Color:</Text>
    <Text style={{fontFamily:Theme.fonts.text900,fontSize:20,color:'black'}}>{color}</Text>
    </View>

    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:20,color:'#000000'}}>Size:</Text>
    <Text style={{fontFamily:Theme.fonts.text900,fontSize:20,color:Theme.colors.primary}}>{size}</Text>
    </View>

    

   </View>
    </View>
    <Text style={{fontSize:20,fontFamily:Theme.fonts.text600}}> Discover the perfect blend of sophistication and
         versatility with our sleek black jacket. Crafted from premium, durable fabric,
          this jacket promises to be a timeless addition to your wardrobe. Its tailored fit enhances your
           silhouette, while the smooth finish adds a touch of modern elegance.</Text>




</View></ScrollView>
<TouchableOpacity onPress={handleAddToCart}>
                <View style={{alignItems:'center',width:'99%',backgroundColor:'#8000804d',height:58,margin:1,borderRadius:5,borderWidth:1,borderColor:'white'}}>
                  <FontAwesomeIcon icon={faCartShopping} size={30} style={{color:Theme.colors.primary}}/>
                  <Text style={{fontFamily:Theme.fonts.text800,fontSize:25, color:Theme.colors.primary}}> Add to Cart</Text>
                </View>

              
               </TouchableOpacity>
                </View>


        </SafeAreaView>
    )
}
export default ProductA;