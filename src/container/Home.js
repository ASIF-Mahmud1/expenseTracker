import  React,{Fragment} from 'react';
import { Button, View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import ExpenseList from '../component/home/ExpenseList'
export default function Home({ navigation }) {

    const handleNavigation = () => {
        navigation.navigate('NewExpense')
    }

    return (
      <Fragment >
         <ExpenseList />
         <TouchableOpacity style={styles.button} onPress={handleNavigation} >
             <Text style={styles.text}>Add Expense</Text>
          </TouchableOpacity>
      </Fragment>
    );
  }


  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20,
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
  