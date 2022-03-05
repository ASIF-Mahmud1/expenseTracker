import React, { Fragment, useState ,useEffect} from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModalPage from '../../helper/component/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { getListOfCategory,getExpenseByDay,getExpenseByWeek ,getTotalPrice} from '../../helper/helper'
import SingleCategory from './SingleCategory'
export default function CategoryList({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false)
  const [option, setOption] = useState('Category')
  const [categoryResult, setCategoryResult] = useState([])

  const expenseList = useSelector(state => state.expense.expenseList)


  const handleParentState = (newOption) => {
    setOption(newOption)
  }

  useEffect(()=>{
    if(option==="Week")
    {
      const result = getExpenseByWeek(expenseList)
      setCategoryResult(result)
    }
    else if(option==="Day")
    {
      const result = getExpenseByDay(expenseList)
      setCategoryResult(result)
    }
    else 
    {
      const result = getListOfCategory(expenseList)
      setCategoryResult(result)
    }

  },[option])

  
  const totalPrice= getTotalPrice(categoryResult)

  return (
    <View>


      <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>Select Other Option</Text>
        </TouchableOpacity>
        <Text>Filtered By :</Text>
        <Text style={{ marginLeft: 5, fontSize: 18, fontStyle: "italic", color: "orange",fontWeight:'bold' }}>{option}</Text>
      </View>
      <TouchableOpacity style={styles.totalPricecontainer}>
            <Text style={styles.title}>  {"Total"}</Text>
            <Text style={styles.totalPrice} >  {totalPrice} BDT </Text>
      </TouchableOpacity>
      
      {
        categoryResult.map((item) => {
          return <SingleCategory key={item.title+item.totalPrice} details={item} />
        })
      }

      <ModalPage modalVisible={modalVisible} setModalVisible={setModalVisible} handleParentState={handleParentState} title={"Filter By"} status={"Category"} />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#301934',
    marginRight: 4

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  totalPricecontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 2,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'grey'
},
title: {
    fontSize: 20,
    color: 'crimson',
    fontWeight:'bold',
    fontStyle:'italic'
},
totalPrice: {
    fontSize: 18,
    color: '#71DEA3',
    fontWeight:'bold',
    fontStyle:'italic'
}
});