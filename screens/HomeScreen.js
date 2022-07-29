import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>
        {" "}
        Logged in as: {"\n"} {auth.currentUser?.email}
      </Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonBook}>
        <Text style={styles.buttonFunctionText}>Book Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonHistory}>
        <Text style={styles.buttonFunctionText}>Booking History</Text>
      </TouchableOpacity>
      <Image source={require("../assets/PASS.png")} style={styles.image} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "22%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    bottom: 230,
    right: 155,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },
  buttonBook: {
    backgroundColor: "#0782F9",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    top: 100,
  },
  buttonHistory: {
    backgroundColor: "#0782F9",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    top: 100,
  },
  buttonFunctionText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  emailText: {
    bottom: 100,
    right: 133,
  },
  image: {
    height: "20%",
    aspectRatio: 2,
    bottom: 250,
  },
});
