import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Home Screen</Text>
                <Button title="Go to About Screen" onPress={() => navigation.navigate("AboutSCR")} />
                <Button title="Go to List Screen" onPress={() => navigation.navigate("ListSCR")} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
  });

export default HomeScreen;