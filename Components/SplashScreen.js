import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';



function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('registerScreen')
        }, 2000)
    })


    return (
        <ImageBackground source={require("../Assets/SplashImage.png")} style={styles.ImageBackground} >
            <View style={styles.headerView}>
                <Text style={styles.headerText}>{'FinTech'}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1
    },
    headerView: {
        alignItems: 'center'
    }, headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginTop: Dimensions.get('screen').height / 7
    }
})
export default SplashScreen;