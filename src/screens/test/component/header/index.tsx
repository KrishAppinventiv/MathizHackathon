import React, {useRef} from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { vh } from '../../../../theme/dimensions';

interface Props {
  current: number;
  correct: number[];
  incorrect: number[];
  numOfQuestions: number;
  onQuestionTouch: (index: number) => void;
  onBackPress: () => void;
}

export function Header({
  current,
  correct,
  incorrect,
  numOfQuestions,
  onQuestionTouch,
  onBackPress,
}: Props) {
  const scrollViewRef = useRef<ScrollView>(null);
  const {width: screenWidth} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  
  React.useEffect(() => {
    const boxWidth = 44; 
    const offset = current * boxWidth + boxWidth / 2 - screenWidth / 2;

    scrollViewRef.current?.scrollTo({
      x: Math.max(0, offset),
      y: 0,
      animated: true,
    });
  }, [current, screenWidth]);

  const numberComponents = Array.from({length: numOfQuestions}, (_, index) => {
    const backgroundColor =
      current === index
        ? '#fcd34d'
        : correct.includes(index)
        ? '#86efac'
        : incorrect.includes(index)
        ? '#fca5a5'
        : '#e5e5e5';
    return (
      <Pressable key={index} onPress={() => onQuestionTouch(index)}>
        
        <View style={[styles.circle, {backgroundColor}]}>
          <Text style={styles.text}>{index + 1}</Text>
        </View>
        
      </Pressable>
    );
  });
  return (
    <View style={[styles.headerContainer, { paddingTop: top }]}>
      <View style={styles.header}>
        <HeaderBackButton onPress={onBackPress} />
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {numberComponents}
        </ScrollView>
      </View>
    </View>
  );


}


const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: "#fff",
      padding:10,
      marginTop:vh(10)
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      paddingVertical: Platform.select({ android: 8, default: 0 }),
    },
    scrollView: {
      flexGrow: 1,
      marginLeft: 8,
    },
    circle: {
      width: 28,
      height: 28,
      borderRadius: 14,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
    },
    text: {
      fontSize: 12,
      fontWeight: "600",
    },
  });
