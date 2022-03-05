import  React,{Fragment} from 'react';
import { Button, View, Text, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import ExpenseList from '../component/home/ExpenseList'
import { useSelector } from 'react-redux'
import { addExpense} from '../features/expense.slice'
export default function Home({ navigation }) {

  const expenseList = useSelector(state => state.expense.expenseList)
  


  const handleNavigation = () => {
      navigation.navigate('NewExpense')
  }

  return (
    <View style={styles.container} >
      <ScrollView>
        <ExpenseList expenseList={expenseList} />
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleNavigation} >
        <Text style={styles.text}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:5
    },
    button: {
      width:300,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:20,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'crimson',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  