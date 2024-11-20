import { memo, useEffect, useRef, useState } from "react";
import {
  Header,
  LoadingIndicator,
  Question as QuestionComponent,
} from "./component";
import PagerView from "react-native-pager-view";


import { View } from "react-native";
import { shuffleArray } from "./shuffle";
import { StatQuestions } from "../../data/questiondata";
import { vh } from "../../theme/dimensions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colors } from "../../theme";


export function TestScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { title: category } = route.params;
  
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctIndexes, setCorrectIndexes] = useState([]);
    const [incorrectIndexes, setIncorrectIndexes] = useState([]);
    
    const pagerViewRef = useRef(null);
    const startTime = useRef(Date.now());
  
   
    useEffect(() => {
        const questions = (() => {
            switch(category) {
                case 'Statistics Math Quiz':
                 
                return StatQuestions
                case 'Integer Quiz':
               
                
                default:
                  
              }
        });
        setQuestions(shuffleArray(questions));
        console.log("useEffect: load questions");
      }, [category]);
  
   
    useEffect(() => {
      if (questions.length > 0) {
        navigation.setOptions({ header: () => renderHeader() });
      }
    }, [questions, currentQuestionIndex, correctIndexes, incorrectIndexes]);
  
  
    useEffect(() => {
      if (
        questions.length > 0 &&
        questions.length === correctIndexes.length + incorrectIndexes.length
      ) {
        navigation.push("Result", {
          correctAnswers: correctIndexes.length,
          totalQuestions: questions.length,
          timeTaken: Date.now() - startTime.current,
        });
      }
    }, [correctIndexes, incorrectIndexes, questions]);
  
    
    const renderHeader = () => (
      <Header
        current={currentQuestionIndex}
        numOfQuestions={questions.length}
        correct={correctIndexes}
        incorrect={incorrectIndexes}
        onQuestionTouch={(index) => pagerViewRef.current?.setPage(index)}
        onBackPress={() => navigation.goBack()}
      />
    );
  
  
    const handleAnswer = (index, isCorrect) => {
      if (isCorrect) {
        setCorrectIndexes((prev) => [...prev, index]);
      } else {
        setIncorrectIndexes((prev) => [...prev, index]);
      }
    };
  
    
    if (questions.length === 0) return <LoadingIndicator />;
  
    return (
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1, marginTop: 20 }}
        initialPage={0}
        onPageSelected={({ nativeEvent }) =>{ 
            console.log(nativeEvent.position)
            setCurrentQuestionIndex(nativeEvent.position)}}
      >
        {questions.map((question, index) => (
          <View key={question.id} style={{ marginTop: vh(20) }}>
            <QuestionComponent
              question={question}
              onAnswered={(isCorrect) => handleAnswer(index, isCorrect)}
            />
          </View>
        ))}
      </PagerView>
    );
  }
  