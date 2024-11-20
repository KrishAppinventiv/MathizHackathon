// import { ResultScreenProps } from "../types";
import { StyleSheet, Text, View } from "react-native";
import { ResultsCard, TimeSpentCard, Button } from "./Component";
import { SafeAreaBox } from "../../components";
import { ScreenNames } from "../../navigator/screenNames";

export function ResultScreen({ navigation, route }) {
  const { correctAnswers, totalQuestions, timeTaken } = route.params;
   console.log("Time Taken")
  return (
    <SafeAreaBox>
      <View style={results.root}>
        <View style={results.cardContainer}>
          <Text style={results.resultsText}>Results</Text>
          <ResultsCard
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
          />
          <TimeSpentCard timeTaken={timeTaken} />
        </View>

        <View style={results.buttonContainer}>
          <Button
            text="Return Home"
            textColor="#fafafa"
            backgroundColor='#7C72E5'
            onPress={() => navigation.navigate(ScreenNames.Intro)}
          />
        </View>
      </View>
    </SafeAreaBox>
  );
}

const results = StyleSheet.create({
  root: {
    height: "100%",
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardContainer: {
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    width: "100%",
    gap: 8,
  },
  resultsText: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
  },
  button: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    alignSelf: "center",
  },
});