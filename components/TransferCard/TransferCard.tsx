import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';



const TransferCard = () => {

    
    return (
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
        >
        <View  style={{flexDirection : 'row'}}>
            <View style={{height : 50,width : 120,backgroundColor : '#98d8ae',marginLeft : 16,borderRadius : 14,flexDirection : 'row',justifyContent : 'center', alignItems : 'center'}}>
                <View style={styles.borderCard}>
                    <FontAwesome5 name="plus"  size={11}/>
                </View>
                    <Text style={styles.TextCard}>Top Up</Text>
                    
            </View>

            <View style={{height : 50,width : 130,backgroundColor : '#a6a4f2',marginLeft : 16,borderRadius : 14,flexDirection : 'row',justifyContent : 'center', alignItems : 'center'}}>
                <View style={styles.borderCard}>
                    <FontAwesome5 name="long-arrow-alt-right"  size={18}/>
                </View>
                    <Text style={styles.TextCard}>Transfert</Text>
                    
            </View>

            <View style={{height : 50,width : 130,backgroundColor : '#e3ae5e',marginLeft : 16,borderRadius : 14,flexDirection : 'row',justifyContent : 'center', alignItems : 'center'}}>
                <View style={styles.borderCard}>
                    <FontAwesome5 name="long-arrow-alt-down"  size={18}/>
                </View>
                    <Text style={styles.TextCard}>Withdraw</Text>
                    
            </View>
        </View>
    </ScrollView>
    )
}

export default TransferCard;
