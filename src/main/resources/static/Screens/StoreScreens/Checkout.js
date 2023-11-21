import {ScrollView, Text, View, Image} from 'react-native';
import {checkout_styles} from "../../Style/Store_style/Checkout_styles";
import Spacer from "../../Components/Spacer";
import BottomButton from "../../Components/BottomButton";
import {useContext, useState} from "react";
import CheckoutComponent from "../../Components/CheckoutComponent";

export default function Checkout({navigation}) {

    const [totalPrice, setTotalPrice] =useState(0)

    return (
        <View style={checkout_styles.container}>
            <View style={checkout_styles.containerUp}>
                <View style={checkout_styles.containerCard}>
                    <Image source={require("../../Poze/Logo.png")} style={checkout_styles.logo}/>

                    <View style={checkout_styles.priceBox}>
                        <Text style={checkout_styles.text}>Total Bill</Text>
                        <Spacer height={5}/>
                        <Text style={checkout_styles.title}>$ 15</Text>
                    </View>
                </View>

                <Spacer height={20}/>
                <View style={checkout_styles.line}></View>
                <Spacer height={5}/>
                <Text style={checkout_styles.text}>For your</Text>
                <Spacer height={5}/>
                <View style={checkout_styles.line}></View>

            </View>

            <View style={checkout_styles.containerDown}>
                <ScrollView style={checkout_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                    <CheckoutComponent
                        name={"Coffee"}
                        amount={1}
                        price={10}

                        navigation={navigation}
                    />

                    <CheckoutComponent
                        name={"Cookie"}
                        amount={2}
                        price={2.5}

                        navigation={navigation}
                    />
                </ScrollView>

                <BottomButton text="Checkout" navigation={navigation} navTo={"Shop"}/>
            </View>
        </View>
    );

}