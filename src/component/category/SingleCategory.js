import React, { Fragment, useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SingleCategory({ details }) {
    const { title, totalPrice } = details

    return (
        <View >
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>  {title}</Text>
                <Text style={styles.totalPrice} >  {totalPrice} BDT </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'grey'
    },
    title: {
        fontSize: 20,
        color: 'orange'
    },
    totalPrice: {
        fontSize: 18,
        color: '#71DEA3'
    }

})    