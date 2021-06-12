import * as React from 'react';
import { ScrollView, StyleSheet ,Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ListCards from '../components/ListCards';
import GetCard from '../components/ListCards/GetCard';
import TransferCard from '../components/TransferCard/TransferCard';


import Cards from "../assets/data/Card.json";
import InfoCard from "../assets/data/InfoCard.json";
import CardItem from '../components/InfoCard/InfoCard';



export default function HomeScreen() {
  return (
    <View >
      <View style={styles.posCard}>
          <FlatList
            ListHeaderComponent={() => <GetCard/>}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Cards}
            renderItem={({item}) => <ListCards card={item}/>}/>
      </View>
      
      <View style={styles.postransfercard}>
        <TransferCard/>
      </View>
        <View style={{alignItems : 'center', top: 75}}>
          <View style={styles.borderhome}></View>
        </View>
        <View style={styles.posinfocard}>
          <ScrollView
          
          
          >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          </ScrollView>
          
        </View>

    </View>
  );
}
 const styles = StyleSheet.create({
   posCard : {
      flexDirection : 'row',
      top : 15

   },
   postransfercard :{
    flexDirection : 'row',
    top : 45,
    marginLeft : 10,
    
    },
    borderhome : {
        height : 2,
        width : 50,
        backgroundColor : 'grey',
        borderRadius : 50
        
    }, 
    posinfocard :{
        top : 85
    }
 }) 
