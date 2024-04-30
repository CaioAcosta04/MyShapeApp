import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native'
import React, { useState } from 'react'

import { Feather, AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../Components/MainHeader'
import CreateWorPage from './CreateWorPage'

const HomePage = (props) => {
    const [workout, setWorkout] = useState(false);
    const [dataWorkout, setDataWorkout] = useState([{id: 0, nome: "Treino de Bumbum", quantidade: 50},
                                                    {id: 1, nome: "Treino de Peito", quantidade: 8},
                                                    {id: 2, nome: "Treino de Costas", quantidade: 5},
                                                    {id: 3, nome: "Treino de Tríceps", quantidade: 9},
                                                    {id: 4, nome: "Treino de Cotovelo", quantidade: 13}]);

    const [originalData, setOriginalData] = useState([{id: 0, nome: "Treino de Bumbum", quantidade: 50},
                                                      {id: 1, nome: "Treino de Peito", quantidade: 8},
                                                      {id: 2, nome: "Treino de Costas", quantidade: 5},
                                                      {id: 3, nome: "Treino de Tríceps", quantidade: 9},
                                                      {id: 4, nome: "Treino de Cotovelo", quantidade: 13}])
    
    function openWorkout(){
      setWorkout(true)
    }

    function closeWorkout(){
      setWorkout(false)
    }

    function search(text){
      var array = JSON.parse(JSON.stringify(originalData))
      setDataWorkout(array.filter((d)=> d.nome.includes(text)))
    }

    return (

      <SafeAreaView style={styles.container}>
        <MainHeader/>
        {workout && <CreateWorPage onClose={closeWorkout}/>}

        <View style={styles.searchBar}>
          <AntDesign name="search1" size={30} color={'gray'}/>
          <TextInput style={styles.input} placeholder='Buscar treino' onChangeText={(text)=> search(text)} autoCapitalize='none'/>
        </View>

        <View style={styles.workoutsView}>
          <FlatList 
            data={dataWorkout}
            renderItem={({item})=>{
              return(
                <View style={styles.workoutItemView} key={item.id}>
                  <View style={styles.workoutItemTextView}>
                    <Text style={styles.workoutItemTitle}>{item.nome}</Text>
                    <Text style={styles.workoutItemQtd}>Quantidade de exercícios: {item.quantidade}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>

        <View style={styles.btnAddView}>
          <TouchableOpacity
            onPress={openWorkout}
          >
            <Feather name="plus-circle" size={48} color={'gray'}/>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  container: {
      width:'100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  searchBar: {
    width:'70%',
    height: 50,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 30,
    padding: 10,
    marginTop: 0
  },
  btnText:{
    textAlign: 'center'
  },
  workoutsView: {
    height: '70%',
    width: '90%',
  },
  btnAddView: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '100%',
    width: '100%',
    marginLeft: 10,
    fontSize: 18
  },
  workoutItemView:{
    height: 120,
    backgroundColor: '#E7E7E7',
    marginBottom:20,
    padding: 10,
    display: 'flex',
    alignItems: 'center'
  },
  workoutItemTextView:{
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  workoutItemTitle: {
    fontSize: 30,
    marginBottom: 15
  },
  workoutItemQtd:{
    fontSize: 20
  },
})

export default HomePage