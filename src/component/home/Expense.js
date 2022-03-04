
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details, children}) {
  const { category, title, price } =details
 

  
  return (
    <View style={[styles.container,]}>


       <TouchableOpacity>
        <Text>Category {category}</Text>
        <Text>Title: {title}</Text>
        <Text>Price: {price}</Text>
      </TouchableOpacity>
          {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginBottom:25,
    borderRadius:10,
    marginHorizontal:15
  },
  cart: {
    backgroundColor:'#50C878',
    //opacity:0.8

  },
  btn:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    width: 300,
    marginBottom:10,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:15,
   fontWeight:'bold',
   fontStyle:"italic",
   marginRight:5
  }
});
