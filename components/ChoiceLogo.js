import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';

const FormButton = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/c.png' }}
            />
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/h.png' }}
            />
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/o.png' }}
            />
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/i.png' }}
            />
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/c.png' }}
            />
            <Image
                style={styles.letter1}
                source={{ uri: 'https://img.icons8.com/plumpy/384/000000/e.png' }}
            />
        </View>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 50,
        width: '100%',
        height: windowHeight / 3,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    letter1: {
        flex: 1,
        width: 45,
        height: 60,
        padding: 0,
        margin: 0
    },
});
