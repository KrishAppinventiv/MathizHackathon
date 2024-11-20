import {View, Text, Button, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
// import styles from './styles';
import strings from '../../utils/string';
import {ScreenNames} from '../../navigator/screenNames';
import {useNavigation, useRoute} from '@react-navigation/native';
import { colors } from '../../theme';
import { vh, vw } from '../../theme/dimensions';
import { Images } from '../../assets';



const Home = () => {
  const navigation: any = useNavigation();

  const route = useRoute();
  const name = route.params.name;
   
  const entry = [
    {
      Image: Images.bar,
      title: 'Statistics Math Quiz', 
      quiz: 10,
    },
    {
      Image: Images.integer,
      title: 'Integer Quiz', 
      quiz: 20,
    },  {
      Image: Images.arith,
      title: 'Arithmetic Quiz', 
      quiz: 15,
    },  {
      Image: Images.permut,
      title: 'Permutation Quiz', 
      quiz: 18,
    },  {
      Image: Images.trick,
      title: 'Tricky Quiz', 
      quiz: 19,
    },
  ];
  return (
    <View style={styles.main}>
       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: vh(20),
          marginTop:vh(30),
          paddingHorizontal: vh(20),
          paddingBottom: vh(20),
        }}>
          <View>
            
          <Text style={{fontSize: vh(20), fontWeight: '500',color:'#FFD6DD'}}>Hello,</Text>
          <Text style={{fontSize: vh(30), fontWeight: '600',color:'white'}}>{name}</Text>
          </View>
       
        <Image
          source={Images.user}
          style={{width: vw(40), height: vh(40)}}
          resizeMode="contain"
        />

        
      </View>

      <View style={{marginHorizontal:vw(20),backgroundColor:'#FFCCD5',borderRadius:20,paddingHorizontal:20,paddingVertical:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
            <Text style={{color:'#660012',fontSize:vh(14),fontWeight:'400'}}>RECENT QUIZ</Text>

            <View style={{marginTop:vh(13),flexDirection:'row'}}>
              <Image source={Images.calculator} style={{height:vh(24),width:vw(24)}} resizeMode='contain'/>
              <Text style={{marginLeft:vw(10),color:'#660012',fontSize:vh(17),fontWeight:'600'}}>A Basic Math Quiz</Text>
            </View>
          </View>

          <Image source={Images.percent} style={{height:vh(48),width:vw(48)}} resizeMode='contain'/>
        </View>
      </View>



      <View
        style={{
          backgroundColor: 'white',
          marginTop: vh(20),
          borderBottomColor: '#B0B8BF',
          paddingVertical: vh(20),
          paddingBottom: vh(20),
          borderStartEndRadius: 10,
          borderStartStartRadius: 10,
          flex:1
        }}>
     
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: vw(20),
          }}>
          <Text style={{fontSize:vh(20),fontWeight:'500'}}>Live Quizzes</Text>
          <Text style={{color:colors.main}}>See all</Text>
        </View>

        <FlatList
          data={entry}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:'center',
                  marginHorizontal: vw(10),
                  marginVertical: vh(10),
                  marginTop: vh(20),
                  borderColor:'#E8E8E8',
                  padding:10,
                  borderRadius:10,
                  borderWidth:2
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: vh(55),
                      width: vw(55),
                      backgroundColor: '#C4D0FB',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      marginRight: vw(10),
                    }}>
                    <Image
                      source={item.Image}
                      style={{height: vh(25), width: vw(25)}}  resizeMode='contain'
                    />
                  </View>
                  <View>
                    <Text>{item.title}</Text>
                    <Text
                      style={{
                        color: '#6B7580',
                        fontSize: 12,
                        marginTop: vh(5),
                      }}>
                      Math : {item.quiz} Quizzes
                    </Text>
                  </View>
                </View>

                <View>
                 <TouchableOpacity 
                 
                 
                 onPress={() => {
                  navigation.navigate(ScreenNames.TestScreen, {
                    title: item.title,
                    
                  });
                }}>
                 <Image source={Images.arrow}/>
                 </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.main},
  
});
