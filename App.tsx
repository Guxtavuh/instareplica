import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


export default function App() {
  return (

      <View style={{flex:1}}>
      <Header />
      <Main/>
      <Footer/>
      <StatusBar style="auto" />
      </View>
    
  );
}
