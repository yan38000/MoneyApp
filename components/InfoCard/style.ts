import {StyleSheet} from 'react-native';
import { block } from 'react-native-reanimated';


const styles = StyleSheet.create({
    textinfo: {
        color : 'grey',
        textAlign : 'center'
      
    },
    posinfocard : {
      flexDirection : 'row',
      marginLeft: 20,
      marginRight : 20,
      top : 15,
      paddingBottom : 20
    },
    iconinfocard : {
       color : 'grey',
       top : 5
       
    },
    titleinfocard : {
      color : 'white',
      fontSize : 16,
      letterSpacing : 1,
      fontWeight : "700"
    },
    subtitleinfocard : {
      color : 'grey',
      fontSize : 14,
      letterSpacing : 1,
      
    },
    priceinfocard : {
      color : 'white',
      fontSize : 16,
      letterSpacing : 1,
      fontWeight : "700",
      position :'absolute',
      right : 0,
      top : 10
    }
});

export default styles;