import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    CardItem: {
      height: 210,
      width : 150,
      borderRadius : 20,
      margin : 3,
      marginLeft: 15
      
    },
    iconCards: {
        margin : 8
    },
    codeCard :{
        marginLeft:8,
        fontSize : 16,
        color : '#3C3C3C'
    },
    priceCard :{
        marginLeft : 8,
        fontWeight: 'bold',
        fontSize : 24
    },
    itempos : {
        position : 'absolute',
        bottom : 8
    },

    getCardConteiner: {
        height: 210,
        width : 70,
        margin : 3,
        marginLeft: 15,
        justifyContent : 'center',
        alignItems : 'center'
    },
    getcard : {
        height : 50,
        width : 50,
        borderWidth:2,
        borderStyle: 'dashed',
        borderColor:'grey',
         borderRadius : 15
        
        
    },
    getCardText:{
        color: 'grey',
        fontSize: 30,
        textAlign : 'center'
        

    }
});

export default styles;
