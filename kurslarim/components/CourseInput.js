import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
 
export default function CourseInput({visible,onAddCourse, onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('')
const addCourseHandler=()=>{
 onAddCourse(enteredCourseText);
 setEnteredCourseText('');
}
const courseInputHandler=(enteredText)=>{
    setEnteredCourseText(enteredText);

}


  return (
    <Modal animationType="slide" visible={visible}>
          <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/imgilk.png')}/>
            <TextInput style={styles.TextInput}
            placeholder="Yeni Kurs Ekle!" 
            value={enteredCourseText} onChangeText={courseInputHandler}/>
            <View style={styles.buttonContainer}>
             <View style={styles.button}>
               <Button title='İptal Et' color="red" onPress={onCancel}/>
             </View>
             <View style={styles.button}>
               <Button title='Ekle' color="blue" onPress={addCourseHandler}/>
             </View>
            </View>
          </View>
        </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgray',
    padding:15
    },
    image:{
    width: 150, 
    height: 150, 
    margin: 20, 
    borderRadius: 20,
    },
    TextInput:{
    borderWidth:1,
    width:'100%',
    padding:10,
    borderRadius:10,
    borderColor:'pink',
    backgroundColor:'pink',
    },
    buttonContainer:{
    flexDirection:'row',
    marginTop:15,
    },
    button:{
    width:100,
    marginHorizontal:8,
    }
})