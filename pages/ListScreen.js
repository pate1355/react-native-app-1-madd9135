import React from 'react';
import { SafeAreaView, FlatList, Pressable, Text , StyleSheet, Image} from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const ListScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <Image
                    source={{ uri: `https://picsum.photos/id/${randomImage + item.id}/200/300` }}
                    style={styles.imageStyle}
                />
      <Text style={styles.textStyle}>{item.title}</Text>
    </Pressable> 
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Pressable onPress={() => navigation.navigate('HomeSCR')}>
        <Text style={styles.btn}>Go to Home Screen</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AboutSCR')}>
        <Text style={styles.btn}>Go to About Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const randomImage = Math.floor(Math.random() * 100);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    imageStyle: {
        width: 300, 
        height: 500,
        borderRadius: 8,
    },
    card: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    textStyle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    btn: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'blue',
      marginTop: 20,
    }
  });

export default ListScreen;
