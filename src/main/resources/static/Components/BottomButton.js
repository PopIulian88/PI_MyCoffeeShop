import {Alert, Text, TouchableOpacity, View} from "react-native";
import {bottomButton_styles} from "../Style/Components_style/BottomButton_styles";
import {MY_GRAY} from "../Help_Box/Colors";
import {useContext} from "react";



export default function BottomButton({text="null", navigation, navTo="BACK", action='', BillPrice=0,
                                         stockData={}}) {

    return (
        <View style={bottomButton_styles.container}>
            {
                text === "NOT DONE" ?
                    <TouchableOpacity style={[bottomButton_styles.containerButton, {backgroundColor: MY_GRAY}]}
                                      onPress={() => {
                                          action === "Shop" ? alert("Complete all the fields first")
                                              : alert("No product added")
                                      }}>

                        <Text style={bottomButton_styles.text}>{text}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={bottomButton_styles.containerButton} onPress={() => {
                        if(text === "ADD"){
                            if(action === "STOCK"){
                                Alert.alert("Stock");
                            }else if(action === "PRODUCT") {
                                Alert.alert("Product");
                            }else{
                                console.log("No add action");
                            }
                        }else if(text === "SAVE") {
                            if(action === "STOCK") {

                                Alert.alert("Stock");

                            }else if(action === "PRODUCT"){

                                Alert.alert("Product");

                            }
                        }else if(text === "Checkout"){

                            navigation.goBack();

                        }else if(text === "Place order") {
                            Alert.alert("Place order");
                        }else {
                            navigation.goBack();
                        }

                    }}>
                        <Text style={bottomButton_styles.text}>{text}</Text>
                    </TouchableOpacity>
            }
        </View>
    );

}