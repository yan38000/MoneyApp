import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import {LinearGradient} from 'expo-linear-gradient'
import styles from './Style';

type CardProps ={
    card : {
        id : string;
        price : string;
        code: string;
        background :{
            color1 : string;
            color2:string;
            color3 :string;
        },
        icon : string;
    }
}

const ListCards = (props : CardProps) => {
    const {card}= props;
    return (
        <View >
            
            <LinearGradient
                colors ={['#7F7FD5','#86A8E7', '#91EAE4']}
                style={styles.CardItem}
                start={[0.1,0]}
                end={[0.2,1]}>

                <FontAwesome5 name={card.icon}  size={33} style={styles.iconCards}/>
                    <View style={styles.itempos}>
                        <Text style={styles.priceCard}>$ {card.price}</Text>
                        <Text style={styles.codeCard}>**** {card.code}</Text>
                    </View>
            </LinearGradient>
        </View>
    )
}

export default ListCards
