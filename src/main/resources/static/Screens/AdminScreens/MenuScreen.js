import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import MenuComponent from "../../Components/MenuComponent";
import Spacer from "../../Components/Spacer";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";
import {useContext, useEffect, useState} from "react";
import {Dropdown} from "react-native-element-dropdown";


export default function MenuScreen({navigation}) {
    const [curentLine, setCurentLine] = useState(1);


    const [isFocus, setIsFocus] = useState(false);
    const [filterSelected, setFilterSelected] = useState();
    const filtersData = [
        {label: "Price", value: '1'},
        {label: "Name", value: '2'},
    ];


    return (
        <View style={menu_styles.container}>
            <View style={menu_styles.containerUp}>
                <View style={menu_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={menu_styles.logo}/>
                    <Text style={menu_styles.title}>Menu</Text>
                    <Image source={require("../../Poze/Logo.png")} style={menu_styles.logo}/>
                </View>

                <View style={menu_styles.undertitleContainer}>
                    <View style={{flex: 1}}>

                    </View>
                    <Spacer/>

                    <TouchableOpacity style={menu_styles.addProduct} onPress={() => {
                        navigation.navigate("AddProduct");
                    }}>
                        <MaterialIcons
                            name="add"
                            size={50}
                            color="black"
                            style={menu_styles.plusIcon}
                        />
                    </TouchableOpacity>

                    <Spacer height={10}/>

                    <Dropdown
                        style={menu_styles.inputBox}
                        data={filtersData}
                        // search
                        placeholderStyle={menu_styles.placeholderStyle}
                        selectedTextStyle={menu_styles.selectedTextStyle}
                        inputSearchStyle={menu_styles.inputSearchStyle}
                        iconStyle={menu_styles.iconStyle}

                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Filter' : '...'}
                        // searchPlaceholder="Search..."
                        value={filterSelected}

                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                </View>
            </View>

            <ScrollView style={menu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <MenuComponent
                    name={"Coffee"}
                    price={10}
                    photoLink={"https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"}

                    navigation={navigation}
                />

                <MenuComponent
                    name={"Cookie"}
                    price={10}
                    photoLink={"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?resize=1200:*"}

                    navigation={navigation}
                />
            </ScrollView>
        </View>
    );

}