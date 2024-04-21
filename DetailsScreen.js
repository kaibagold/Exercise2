import React from "react";
import { StyleSheet, View ,ImageBackground} from "react-native";
import { Text } from "react-native-paper";
const image = {uri: 'https://www.cristianoronaldo.com/assets/images/brand_fragrances.jpg?t=3103296480'};

const DetailsScreen =()=>{
    return (
        <View style ={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text>Details Screen</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
       justifyContent: 'center',
     },
})
export default DetailsScreen;