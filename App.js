import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import { Colors } from './utils/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [ isGameOver, setIsGameOver ] = useState(true);
  const [ guessRounds, setGuessRounds ] = useState(0);

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true)
    setGuessRounds(numberOfRounds);
  }
  const [fontsLoaded] = useFonts({
    'open-sans': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf')
  });

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={startGameHandler} />
  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  if(isGameOver && userNumber) screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/dice.jpg')} resizeMode="cover"
        style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
