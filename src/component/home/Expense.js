
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details, children}) {
  const { category, title, price } =details
 

  
  return (
    <View>


       <TouchableOpacity style={styles.btn}>
       
       
        <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
               <Text style={styles.text}> {title}</Text>
              <Text style={styles.text}> {price} BDT</Text>
        </View>
        <Text style={styles.category}> {category}</Text>
      </TouchableOpacity>
          {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    marginBottom:25,
    borderRadius:10,
    marginHorizontal:15,
    alignItems:'center',
    justifyContent:'center'
  },

  btn:{
      width:350,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 25,
        borderColor: '#71DEA3'
    },
  text :
  {
    color:'crimson',
   fontSize:18,
   fontWeight:'bold',
   fontStyle:"italic",
   marginRight:5
  },
  category:{
    color:'orange',
    fontSize:15,
    fontWeight:'bold',
    fontStyle:"italic",
    marginRight:5
  }
});
