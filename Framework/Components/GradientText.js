// components/GradientText.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ children, colors, style }) => (
    <View style={styles.container}>
        <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <Text style={[styles.text, style]}>{children}</Text>
        </LinearGradient>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
    },
    gradient: {
        padding: 2, 
        borderRadius: 10,
        overflow: 'hidden', 
    },
    text: {
        fontSize: 25, 
        fontFamily: 'Theme.fonts.text900', 
    },
});

export default GradientText;
