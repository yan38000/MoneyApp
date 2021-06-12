import React from 'react'
import { View, Text } from 'react-native'
import './Style'
import styles from './Style'

const GetCard = () => {
    return (
        <View style={styles.getCardConteiner}>
            <View style={styles.getcard}>
                <Text style={styles.getCardText}>+</Text>
            </View>
        </View>
    )
}

export default GetCard
