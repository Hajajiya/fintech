import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, BackHandler, Alert, Dimensions } from 'react-native';
function RegisterScreen({ navigation }) {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();

    }, []);
    return (
        <ImageBackground source={require("../Assets/SplashImage.png")} style={styles.ImageBackground} >
            <View style={styles.View}>
                <View style={styles.ButtonView} >
                    <TouchableOpacity style={styles.ButtonTouch} onPress={() => {
                        navigation.navigate('loginScreen')
                    }}>
                        <Text style={styles.Text}>{'Log in'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ButtonView} >
                    <TouchableOpacity style={styles.ButtonTouch} onPress={() => {
                        navigation.navigate('signinScreen')

                    }}>
                        <Text style={styles.Text}>{'Sign in'}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1
    },
    View: {
        flexDirection: 'column',
        marginTop: Dimensions.get('screen').height / 1.5,
    },
    ButtonView: {
        alignItems: 'center',
        padding: 10
    },
    ButtonTouch: {
        backgroundColor: 'black', alignItems: 'center', width: 250, height: 50, borderRadius: 10
    },
    Text: {
        margin: 10, fontWeight: 'bold', fontSize: 15, color: 'white'
    }

})
export default RegisterScreen;