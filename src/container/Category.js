import * as React from 'react';
import { Button, View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import CategoryList from '../component/category/CategoryList';
export default function Category({ navigation }) {
    return (
      <View style={styles.container}>
         <CategoryList/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
     
      backgroundColor:'white',
   
    },
   
  });