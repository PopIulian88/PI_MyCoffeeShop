import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {finishOrder_styles} from "../../Style/Store_style/FinishOrder_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import BottomButton from "../../Components/BottomButton";
import FinishOrderComponent from "../../Components/FinishOrderComponent";

export default function FinishOrder({navigation}) {

    return (
        <View style={finishOrder_styles.container}>
            <View style={finishOrder_styles.containerUp}>
                <View style={finishOrder_styles.containerUpText}>
                    <TouchableOpacity onPress={() => {
                        navigation.replace("Table");
                    }}>
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={40}
                            color={MY_RED}
                            style={finishOrder_styles.backIcon}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row"}}>
                        <Text style={finishOrder_styles.title}>Finish Order</Text>
                        <Text style={[finishOrder_styles.title, {color: DARK_GREEN}]}> #1</Text>
                    </View>
                    <Image source={require("../../Poze/Logo.png")} style={finishOrder_styles.logo}/>
                </View>

                <Spacer height={10}/>
                <View style={finishOrder_styles.blackLine}></View>

            </View>

            <ScrollView style={finishOrder_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >

            </ScrollView>

            <BottomButton text="Place order" navigation={navigation} navTo={"Shop"}/>

        </View>
    );

}