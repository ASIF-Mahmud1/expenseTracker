
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Expense from './Expense'

export default function ExpenseList({expenseList}) {

  const list= expenseList? expenseList:[]
  console.log("List Here ",expenseList);
  return (
    <View style={styles.container}>
      <Text style={{color:'orange', fontWeight:"bold",fontSize:20, margin:5}}>My Expenses</Text>
      <ScrollView style={{ margin: 2 }}>

        {
          list.map((item,index) => {
            return   <Expense details={item} key ={item.title+index} />
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