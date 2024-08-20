import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBotton } from "../Components/AppBotton";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons/faUserEdit";

export function Signup({navigation}) {
    return (
<ImageBackground source={require("../../assets/Logimage2.jpg")} style={{height:'100%', width:'100%'}}>
<SafeAreaView style={styles.overlay}> 

<View style={{padding:30, marginTop:50, alignSelf:'center', backgroundColor:"#6E3DEB", borderRadius:50}}>
    <FontAwesomeIcon icon={faUserEdit} size={50} color="white" />
</View>

<View style={{margin:20 }}>
    <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:30, color:'white'}}>Create An Account</Text>
</View>

<View style={{margin:10, marginTop:30 }}>
    <Text style={{ fontSize:20, color:'white'}}>Name</Text>

<View>
    <TextInput
    placeholder="Enter Your Name"
    style={{borderRadius:30}}/>
</View>
</View>

<View style={{margin:10, marginTop:5 }}>
    <Text style={{ fontSize:20, color:'white'}}>Surname</Text>

<View>
    <TextInput
    placeholder="Enter Your Surname"
    style={{borderRadius:30}}/>
</View>
</View>

<View style={{margin:10, marginTop:5 }}>
    <Text style={{ fontSize:20, color:'white'}}>Email or Phone Number</Text>

<View>
    <TextInput
    placeholder="Enter Email or Phone Number"
    style={{borderRadius:30}}/>
</View>
</View>

<View style={{margin:10, marginTop:5 }}>
    <Text style={{ fontSize:20, color:'white'}}>Password</Text>

<View>
    <TextInput
    placeholder="Enter Password"
    style={{borderRadius:30}}/>
</View>
</View>

<View style={{marginTop:30}}>
    <AppBotton onPress={()=>navigation.navigate("Profile")}>Signup</AppBotton>
</View>

<View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
    <Text style={{ fontSize:20, color:'white'}}>Already have an account?</Text> 
    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={{ fontSize:20, color:'red'}}> Login</Text>
    </TouchableOpacity>
    

    <View style={{paddingVertical: 50}}> 

    
</View>
<View style={{paddingVertical: 50}}> 

    
</View>
</View>



</SafeAreaView>
</ImageBackground>
 )
}

const styles = StyleSheet.create({
    overlay: {
         flex: 1,

         // backgroundColor: Theme.colors.primary + 80,
         backgroundColor: "#00000081",
         padding: 20,
        
     }
 })