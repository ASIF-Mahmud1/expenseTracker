import React,{Fragment,useState} from 'react';
import { Button, View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import ModalPage from '../../helper/component/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { getListOfCategory} from '../../helper/helper'
export default function CategoryList({ navigation }) {

    const [modalVisible, setModalVisible] =useState(false)
    const [option,setOption]= useState('Category')

    const handleParentState=(newOption)=>{
      setOption(newOption)
    }


const expenseList = useSelector(state => state.expense.expenseList)
const result= getListOfCategory(expenseList)  
console.log(result);

    return (
        
            <View style={styles.container}>
            
            <TouchableOpacity  style={styles.button} onPress={()=>setModalVisible(true)}>
                  <Text style={styles.text}>Select Other Option</Text>
            </TouchableOpacity>
            <Text>Filtered By :</Text>
            <Text style={{ marginLeft:5,fontSize: 16,fontStyle:"italic",color:"orange"}}>{option}</Text>
            <ModalPage  modalVisible={modalVisible}  setModalVisible={setModalVisible} handleParentState ={handleParentState} title={"Title"}  status={"Category"}/>
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
      marginRight:4
      
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });