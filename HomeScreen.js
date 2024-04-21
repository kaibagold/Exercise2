import { Button, Text } from 'react-native-paper' ;
import {View, StyleSheet, ImageBackground} from 'react-native'
const HomeScreen= ({ navigation }) => {
    return (
    <View style={style.container}>
        
            <Text>Home Screen</Text>
            <Button mode ="contained" onPress={() => navigation.navigate('Details')}>
                Go to details
            </Button>
     
    </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems :'center',
        justifyContent: 'center' ,
    
    },
    
});
export default HomeScreen;