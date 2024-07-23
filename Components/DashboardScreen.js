import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
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

    const fetchData = async () => {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

            const response = await fetch(apiUrl);
            if (!response.ok) {
                console.error('Network response was not ok');

            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (error) {
            console.error('Error :', error);
            setLoading(false);
        }
    };

    const ExitAction = () => {
        Alert.alert('Log out!', 'Are you sure you want to Log in?', [
            {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
            },
            { text: 'YES', onPress: () => navigation.navigate('loginScreen') },
        ]);
        return true;
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>{'Dashboard'}</Text>
                <TouchableOpacity onPress={() => {
                    ExitAction()
                }}>
                    <Image source={require('../Assets/logout.png')} style={styles.Image
                    } />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    headerView: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginHorizontal: 110
    }, Image: { height: 17, width: 17, marginTop: 5, },
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    body: {
        fontSize: 14,
        color: 'white'
    },
});

export default DashboardScreen;
