import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState([]); //kursları listeleyip tutacağız
  const startModal=() =>{
    setModalIsVisible(true)//tıkladığımda true ya çekilmiş olacak
  };
   const endModal=() =>{
    setModalIsVisible(false)
  };
   const addCourse=(courseTitle) =>{
    //console.log(courseTitle);
    setCourses((currentCourses)=>[ //elemanlar setCourses değişkeninde currentCourses de tutuluyor
      ...currentCourses, //var olanları ger dön ve artık courses lara yeni eklediğim objeler array olarak atanıyor
      {text:courseTitle,id:Math.random().toString()}, //id değerlerinin birbirinden farklı olmasını sağladık
      
    ])
    endModal();
  };
  return (
    <>
    <StatusBar style="light" /> 
    <View style={styles.container}>
      <Button title="Kurs Ekle" color="red" onPress={startModal}/>
      <CourseInput
      visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal}
      />
      <View>
        <FlatList
        data={courses} //dataya courses içindekileri attık
        renderItem={({item})=>(
        <View style={styles.courseItem}>
          <Text style={styles.courseText}>{item.text}</Text>
        </View> 
        )} //courses içindekileri bastırıyoruz
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:20,
  },
  courseItem:{
    backgroundColor:'lightgray',
    margin:8,
    borderRadius:5,
  },
  courseText:{
    padding:8,
    color:'white',
  }
});
