import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Intro } from '../Screens/Intro';
import { Login } from '../Screens/Login';
import { Profile } from '../Screens/Profile';
import { PostProduct } from '../Screens/PostProduct';
import { Signup } from '../Screens/SignUp';
import { MyProducts } from '../Screens/MyProduct';
import { ChangePassword } from '../Screens/ChangePassword';
import { ForgotPassword } from '../Screens/ForgotPassword';
import { FundAccount } from '../Screens/FundAccount';
import { Pay } from '../Screens/pay';

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="PostProduct" component={PostProduct} options={{ headerShown: false }} />
            <Stack.Screen name="MyProduct" component={MyProducts} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="FundAccount" component={FundAccount} />
            <Stack.Screen name="Pay" component={Pay} />





            
        </Stack.Navigator>
    );
}