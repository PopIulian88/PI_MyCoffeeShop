import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {table_styles} from "../../Style/Store_style/Table_styles";
import {BACKGROUND_COLOR, DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useContext, useEffect, useState} from "react";
import OrderTableComponent from "../../Components/OrderTableComponent";


export default function Table({navigation}) {
    const [curentLine, setCurentLine] = useState(1);

    return (
        <View style={table_styles.container}>
            <View style={table_styles.containerUp}>
                <View style={table_styles.containerUpText}>
                    <TouchableOpacity onPress={() => {
                        navigation.replace("Store");
                    }}>
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={40}
                            color={MY_RED}
                            style={table_styles.backIcon}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row"}}>
                        <Text style={table_styles.title}>Order Table</Text>
                        <Text style={[table_styles.title, {color: DARK_GREEN}]}> #1</Text>
                    </View>
                    <Image source={require("../../Poze/Logo.png")} style={table_styles.logo}/>
                </View>

                <TouchableOpacity style={table_styles.orderButton} onPress={() => {
                    Alert.alert("Table press")
                }}>
                    <Text style={table_styles.text}>Show order</Text>
                </TouchableOpacity>

                <Spacer height={10}/>
                <View style={table_styles.blackLine}></View>
                <Spacer height={10}/>

            </View>

            <ScrollView style={table_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <OrderTableComponent
                    name={"Coffee"}
                    price={10}
                    photoLink={"https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"}

                    navigation={navigation}
                />

                <OrderTableComponent
                    name={"Cookie"}
                    price={2.5}
                    photoLink={"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?resize=1200:*"}

                    navigation={navigation}
                />
            </ScrollView>
        </View>
    );

}