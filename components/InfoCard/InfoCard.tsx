import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';

const InfoCard = () => {
    return (
        <View>
            <ScrollView>
            <Text style={styles.textinfo}>hello</Text>
            <View style={styles.posinfocard}>
                <FontAwesome5 name="spotify"  size={30} style={styles.iconinfocard}/>
                <View style ={{marginLeft : 15 }}>
                    <Text style={styles.titleinfocard}>spotify</Text>
                    <Text style={styles.subtitleinfocard}>Music</Text>
                </View>
                
                <Text style={styles.priceinfocard}>$15</Text>

            </View>

            

         </ScrollView>   
        </View>
    )
}

export default InfoCard
