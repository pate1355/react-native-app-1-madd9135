import React from "react";
import { SafeAreaView, View, Text, Button, Image,StyleSheet, ScrollView } from "react-native";


const AboutScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>    
            <View>
                <Text style={styles.textStyle}>Random Images</Text>
                <Image
                    source={{ uri: `https://picsum.photos/id/${randomImage}/200/300` }}
                    style={styles.imageStyle}
                />
                <Image
                    source={{ uri: `https://picsum.photos/id/${randomImage+3}/200/300` }}
                    style={styles.imageStyle}
                />
                <Button title="Go to Home Screen" onPress={() => navigation.navigate("HomeSCR")} />
                <Button title="Go to List Screen" onPress={() => navigation.navigate("ListSCR")} />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const randomImage = Math.floor(Math.random() * 100);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    imageStyle: {
        width: 300,
        height: 500,
        borderRadius: 8,
        margin: 10,
    },
    
  });

export default AboutScreen;