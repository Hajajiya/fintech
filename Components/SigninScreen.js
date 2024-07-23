import React, { useState } from "react";
import { Alert, View, Text, TextInput, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SigninScreen() {
    const [Mail, setMail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <ImageBackground source={require('../Assets/ScreenImage.png')} style={styles.backgroundImage}>
                <KeyboardAvoidingView
                    style={{ flex: 4.5 }}

                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

                        <View style={styles.container}>
                            <View style={styles.headerView}>
                                <Text style={styles.header}>{'Welcome To Sign in'}</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter The Email-Id"
                                onChangeText={text => setMail(text)}
                                value={Mail}
                            />
                            <TextInput
                                style={[styles.input, { marginTop: 30 }]}
                                placeholder="Enter The Password"
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                                value={password}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        if (Mail.length == '') {
                                            Alert.alert('Please Enter The Username')
                                        } else if (Mail.length <= 5) {
                                            Alert.alert('Please Enter Username More Then 5 Letters')

                                        }
                                        else if (password.length == '') {
                                            Alert.alert('Please Enter The Password')

                                        } else if (password.length <= 5) {
                                            Alert.alert('Please Enter Password More Then 5 Letters')

                                        }
                                        else {
                                            handleSignIn()
                                            setMail('');
                                            setPassword('');
                                        }
                                    }}
                                >
                                    <Text style={styles.buttonText}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: 350,
        borderRadius: 10,
        height: 45,
        color: 'black',
        fontSize: 15,
        padding: 15,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height / 25,
    },
    button: {
        backgroundColor: 'black',
        alignItems: 'center',
        width: 250,
        height: 40,
        borderRadius: 10,
    },
    buttonText: {
        margin: 7,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    headerView: {
        alignItems: 'center',
        marginBottom: 35
    }
});

export default SigninScreen;
