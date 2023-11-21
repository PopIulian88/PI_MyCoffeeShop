import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Password from "./Screens/Password";
import Admin from "./Screens/AdminScreens/Admin";
import Store from "./Screens/StoreScreens/Store";

const Stack = createNativeStackNavigator()

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Welcome"}>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
                <Stack.Screen options={{headerShown: false}} name={"Password"} component={Password}/>
                <Stack.Screen options={{headerShown: false}} name={"Admin"} component={Admin}/>
                <Stack.Screen options={{headerShown: false}} name={"Store"} component={Store}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

