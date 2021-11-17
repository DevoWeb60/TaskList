import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

const months = ["Janv.", "Fév.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."]

export default function Header() {
    const date = new Date()

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()}`}</Text>
            <Text style={styles.months}>{`${months[date.getMonth()]}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingLeft: 25,
        paddingTop:20,
        flexDirection:'row',
        alignItems:'flex-end',

    },
    date: {
        fontSize:26,
        fontWeight:"bold"
    },
    months:{
        fontSize:24,
        marginLeft:10,
    }
})
