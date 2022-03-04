
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Expense from './Expense'

export default function ExpenseList({items}) {

  const featured= items? items.filter((ele)=> ele.featured):[]
  
  return (
    <View style={styles.container}>
      <Text style={{color:'orange', fontWeight:"bold",fontSize:20, margin:5}}>My Expenses</Text>
      <ScrollView horizontal={true} style={{ margin: 2 }}>

        {
          featured.map((item) => {
            return   <Expense details={item}  />
          })
        }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});