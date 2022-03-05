import React,{Fragment} from 'react';
import { Button, View, Text, TouchableOpacity ,StyleSheet} from 'react-native';

export default function CategoryList({ navigation }) {
    return (
        
            <View style={styles.container}>
            
            <TouchableOpacity  style={styles.button}>
                  <Text style={styles.text}>Select Other Option</Text>
            </TouchableOpacity>
            <Text>Filtered By : </Text>
            <Text style={{ marginLeft:10,fontSize: 16,fontStyle:"italic"}}>My Date</Text>

            </View>

        
    );
  }


  const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
      alignItems:"center",
      backgroundColor:'white',
      padding:20,
      justifyContent:'space-between'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 32,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: '#301934',
      
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });