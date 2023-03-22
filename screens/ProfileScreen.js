import React from 'react';
import { View, Text, StyleSheet,  Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { keyboardProps } from "react-native-web/dist/cjs/modules/forwardedProps";
export default function ProfileScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../assets/profile.jpg')} style={styles.profilePic} />
        <Text style={styles.name}>Mila Oktaviani</Text>
        <Text style={styles.nim}>120140021</Text>
        
    </View>
    <View style={styles.content}>
        <Text style={styles.title}>TENTANG SAYA</Text>
        <Text style={styles.aboutMe}>Saya adalah seorang mahasiswa semester 6 Program Studi Teknik Informatika, Institut Teknologi Sumatera.</Text>
        <Text style={styles.aboutMe}>Aplikasi ini dibuat untuk memenuhi tugas UTS mata kuliah Pengembangan Aplikasi Mobile RB</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  header: {
    alignItems: 'center'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  nim: {
    fontSize: 16,
    marginBottom: 5
  },
  prodi: {
    fontSize: 16,
    marginBottom: 5
  },
  kelas: {
    fontSize: 16,
    marginBottom: 10
  },
  content: {
    marginTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutMe: {
    fontSize: 16
  }
});