import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import MenuComponent from "../../Components/MenuComponent";
import Spacer from "../../Components/Spacer";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../../Context/MyContext";
import {
    fetchDataGetLimitedStock,
    fetchDataGetProducts, fetchDataGetSortedNameProducts, fetchDataGetSortedPriceProducts,
    fetchDataGetSortedPriceStock,
    fetchDataGetSortedQuantityStock
} from "../../Help_Box/API_calls";
import {stock_styles} from "../../Style/Admin_style/Stock_styles";
import {Dropdown} from "react-native-element-dropdown";


export default function MenuScreen({navigation}) {
    const [curentLine, setCurentLine] = useState(1);

    const {productData, setProductData} = useContext(MyContext);

    const [isFocus, setIsFocus] = useState(false);
    const [filterSelected, setFilterSelected] = useState();
    const filtersData = [
        {label: "Price", value: '1'},
        {label: "Name", value: '2'},
    ];

    const renderDynamicProduct = () => {
        return productData.map((item) => {
            return (
                <MenuComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    photoLink={item.photoLink}

                    navigation={navigation}
                />
            );
        });
    };


    useEffect(() => {
        fetchDataGetProducts().then(respons => {
            setProductData(respons)
        })
         //console.log(productData);
    }, [])

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

                        onChange={item => {

                            setFilterSelected(item);
                            setIsFocus(false);
                        }}

                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                </View>
            </View>

            <ScrollView style={menu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                {renderDynamicProduct()}
            </ScrollView>
        </View>
    );

}