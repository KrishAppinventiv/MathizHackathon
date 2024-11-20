import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../theme'
import { vh, vw } from '../../theme/dimensions'
import { Images } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../navigator/screenNames'

const Intro = () => {
    const[name,setName] = useState('');
    const navigation:any = useNavigation();
  return (
    <View style={styles.container}>
     <View style={{alignItems:'center',flex:.6,justifyContent:'center'}}>
      <View style={{height:vh(190), width:vw(160), backgroundColor:'white',borderRadius:100,justifyContent:"center",alignItems:'center'}}>
    <Image source={Images.calculator} style={{height:vh(98),width:vw(90)}} resizeMode='contain'/>
      </View>
     </View>

     <View style={{marginHorizontal:vw(20)}}>
     <Text style={{fontSize:vh(17),fontWeight:'600',color:'white'}}>Enter Your Name</Text>

     <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor='white'
                            style={styles.input}
                            value={name}

                            onChangeText={(text) => setName(text)}
                        />

                      
                    </View>

     </View>


     <View style={{justifyContent:'flex-end',flex:.2,alignItems:'center'}}>
        <TouchableOpacity disabled={name===''?true:false}style={{backgroundColor:'white',paddingHorizontal:vw(50),paddingVertical:vh(20),borderRadius:30}} onPress={() => {
                  navigation.navigate(ScreenNames.Home,{
                    name:name
                  })}}>
            <Text>Let's Go</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.main
    },
    input: {
        alignItems: 'center',
        padding: 8,
        color: 'white',
        fontSize:17
    },
    inputContainer: {
        padding:10,
       
        borderRadius: 7,
        borderColor: "white",
        borderWidth: 1.5,
        // backgroundColor: 'white',
        marginBottom: 35,
        marginTop:vh(20)

    },
})