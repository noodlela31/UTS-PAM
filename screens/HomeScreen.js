import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";
import ViewScreen from "./ViewScreen";
import ImageScreen from "./ImageScreen";
import CameraScreen from "./CameraScreen";

function HomeScreen({ navigation }) {
    const [Laptops, setLaptops] = useState([
    {
        image: require("../assets/strixG15.jpg"),
        name: "ROG Strix G15",
        price: "Rp20.400.000",
        key: "1",
    },
    {
        image: require("../assets/flowX13.jpg"),
        name: "ROG Flow X13",
        price: "Rp24.499.000",
        key: "2",
    },
    {
        image: require("../assets/zephyrus.jpg"),
        name: "ROG Zephyrus M16",
        price: "Rp25.638.000",
        key: "3",
    },
    {
        image: require("../assets/strixSCAR.jpg"),
        name: "ROG Strix SCAR 17 SE",
        price: "Rp61.199.000",
        key: "4",
    },
    {
        image: require("../assets/strixSCAR15.jpg"),
        name: "ROG Strix SCAR 15",
        price: "57.499.000",
        key: "5",
    },
    {
        image: require("../assets/fx.jpg"),
        name: "ROG FX502VM",
        price: "Rp11.300.000",
        key: "6",
    },
    {
        image: require("../assets/strixG513RC.jpg"),
        name: "ROG Strix G513RC",
        price: "Rp19.999.000",
        key: "7",
    },
    {
        image: require("../assets/zephyrusG14.jpg"),
        name: "ROG Zephyrus G14",
        price: "Rp24.800.000",
        key: "8",
    },
    ]);

    return (
    <View style={styles.container}>
        <FlatList
        data={Laptops}
        renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Image", item)}>
            <View style={styles.LaptopsContainer}>
                <Image source={item.image} style={styles.LaptopsImage} />
                <Text style={styles.textLaptops}>{item.name}</Text>
                <Text style={styles.textLaptops}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )}
        />
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ImagePicker")}>
            <Feather name="upload" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Feather name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign name="back" size={30} color="white" />
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    buttonContainer: {
        width: "100%",
        backgroundColor: colors.bgColor,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
    },
    textButton: {
        color: "white",
        backgroundColor: colors.bgColor,
        padding: 15,
        fontSize: 15,
    },
    textLaptops: {
        marginBottom: 5,
        marginTop: 5,
        padding: 1,
        fontSize: 24,
        color: colors.black,
        flexDirection: "row",
        //flex: 1,
    },

    LaptopsImage: {
        width: 320,
        height: 210,
        resizeMode: "contain",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    LaptopsContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        margin: 10,
        borderRadius: 15,
    },
});

export default HomeScreen;
