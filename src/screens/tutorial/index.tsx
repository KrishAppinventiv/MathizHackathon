import {View, Text,ImageBackground, StyleSheet, TouchableOpacity,Image} from 'react-native';
import React, {useEffect} from 'react';
import { Images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigator/screenNames';
import { colors } from '../../theme';
import { vh, vw } from '../../theme/dimensions';





const Tutorial = () => {

  const navigation = useNavigation();
  
  return (
   
    <View style={styles.container}>
     

    <View style={{ flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:100}}>
      <Image source={Images.Tutorial} style={{height:vh(250),width:vw(150),marginBottom:vh(40)}}/>
      <Text style={{color:'black',opacity:.5,fontSize:24,fontWeight:'900',fontFamily:'Georgia'}}>Welcome at Mathiz</Text>
      <Text style={{color:'black',opacity:.6,fontSize:15,fontWeight:'500',marginTop:10}}>Simple way to test your mathematics</Text>
      <TouchableOpacity style={{backgroundColor:colors.main,padding:20,borderRadius:30,paddingHorizontal:40,marginTop:20}} onPress={()=>navigation.navigate(ScreenNames.Intro)}>
        <Text style={{fontSize:16,color:'white',fontWeight:'700'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
   
     
    </View>
  
  );
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'white'
  }

})
export default Tutorial;
