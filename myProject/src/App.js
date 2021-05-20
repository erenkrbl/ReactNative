import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {
  const myName = "Arthur"

  // function myFunction() {
  //   return (
  //     <View>
  //       <Text>Hello Everbody</Text>
  //       <Text>Hello My Friends</Text>
  //     </View>
  //   )
  // }

  // function ourFunction(){
  //   const isAdmin = false;
  //   if(isAdmin){
  //     return <Text>User Admin</Text>
  //   } else {
  //     return <Text>User Customor</Text>
  //   }
  // }

  function yourFunction(){
    const isAdmin = true;
    return isAdmin ? <Text>User Admin</Text> : null;
  }      
  return (
    <View >
      <View style={styles.container}>
        <Text style = {styles.text}>
          Hello React native
        </Text>
      </View>
      <MyComponent/>
      {/* {myFunction()} */}
      {yourFunction()}
    </View>
  )
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 20,
   },
   text : {
     color: 'black',
     fontSize: 35,
     fontWeight: 'bold',
     textAlign: 'center'
   },
   hello : {
     fontSize: 30,
     margin: 20
   }
 })
export default App;
