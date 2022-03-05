import React,{ useState  } from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity } from 'react-native';
//import { Loader,showToast } from '../helper/component/Indicator';
import { useSelector, useDispatch } from 'react-redux'
import { addExpense} from '../../features/expense.slice'
export default function NewExpense({navigation}) {
   
  const [state,setState]= useState({
    title:'',
    price:'',
    category:''
  })

  const [loading,setLoading]= useState(false)

 const expenseList = useSelector(state => state.expense.expenseList)
 
  const dispatch = useDispatch()


  const handleChannge=(key,value)=>{
   
     setState({...state, [key]:value})
  
  }
  const handleAddExpense = async () => {

    const disable = state.title === "" || state.price === "" || state.category === ""
    if (disable === false) 
    {
       const expense= {...state, date: Date.now()}
      
       dispatch(addExpense(expense))
    }
    else {
      // showToast('Enter details to signup!')
    }

  }


  const handleNavigation=()=>{
     navigation.navigate("Events")
  }
  return (
    <View style={styles.container}>

      <View>
          <Text style={styles.title}>Add{"\n"}New Expense</Text>
          <Text style={styles.subTitle}>Fill the details {"&"} add your new expense</Text>
      </View>
     
      <View style={{ paddingTop:60}  }> 
          <TextInput placeholder='Expense Title' placeholderTextColor="grey"   style={styles.input} value= {state.title} onChangeText={(value)=> handleChannge('title',value)}/>
          <TextInput placeholder='Price' placeholderTextColor="grey"  style={styles.input} value= {state.price} onChangeText={(value)=>   handleChannge('price',value)} />
          <TextInput placeholder='Category'  placeholderTextColor="grey"  style={styles.input}  value= {state.category} onChangeText={(value)=>  handleChannge('category',value)} />
      </View>
      <TouchableOpacity   style={[styles.save]} onPress={handleAddExpense}>
         <Text style={[styles.btnText]} >   Save </Text>  
      </TouchableOpacity>     

      {/* <Loader loading={loading}  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
   backgroundColor: 'white',
    paddingHorizontal:40,
    paddingTop:20
  },
  title:{
    color:'#71DEA3',
    fontSize:25
  },
  subTitle:{
    color:'grey',
    fontSize:15,
    opacity:0.8,
    fontWeight:'bold'
  },
  input:{
    borderColor:'#71DEA3',
    borderWidth:2,
    borderRadius:20,
    marginTop:15,
    paddingHorizontal:15,
    paddingVertical:6,
    color:'black',
    fontSize:15


  },
  save:{
    backgroundColor:'#71DEA3',
    borderRadius:20,
    marginVertical:20,
    paddingHorizontal:15,
    paddingVertical:10,

  },
  btnText:{
    textAlign:'center',
    color:'white', 
    fontWeight:'bold',
    fontSize:20
  }

});
