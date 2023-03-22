import {
    Image,
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    Text,
    FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";

function ViewScreen({ navigation, route }) {
    const [Laptops, setLaptops] = useState([
        { image: require("../assets/strixG15.jpg"), name: "ROG Strix G15", key: "1" },
        { image: require("../assets/flowX13.jpg"), name: "Pants", key: "2" },
        { image: require("../assets/zephyrus.jpg"), name: "Hoodie", key: "3" },
        { image: require("../assets/strixSCAR.jpg"), name: "Skirt", key: "4" },
        { image: require("../assets/strixSCAR15.jpg"), name: "Shirt", key: "5" },
        { image: require("../assets/fx.jpg"), name: "Jacket", key: "6" },
        { image: require("../assets/strixG513RC.jpg"), name: "Shoes", key: "7" },
        { image: require("../assets/zephyrusG14.jpg"), name: "Socks", key: "8" },
    ]);
    let itemKey = route.params.key;
    let itemDir = route.params.image;
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/strixG15.jpg")}
                style={styles.LaptopsImage}
            />
            <Text>
            TAMPILAN : Layar	15.6", Resolusi Layar	1920 x 1080pixels, Teknologi Layar	IPS
            </Text>
            <Text>
            PLATFORM : 
            Prosesor	AMD Ryzen 7 5800H
            Kecepatan Prosesor	4.4GHz
            Sistem Operasi	Windows 10 Home
            </Text>
            <Text>
            PENYIMPANAN : 
            Penyimpanan	512GB
            Tipe Penyimpanan	SSD
            </Text>
            <Text>
            MEMORI : 
            RAM	8GB
            Tipe RAM	DDR4
            </Text>
            <Text>
            GRAFIS : 
            Graphic Card	NVIDIA GeForce RTX 3050 Ti
            </Text>
            <Text>
            DESAIN
            Berat	2.1kg
            </Text>

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
        flex: 1,
        justifyContent: "flex-end",
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
        width: "100%",
        height: "100%",
        resizeMode: "contain",
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
});

export default ViewScreen;
