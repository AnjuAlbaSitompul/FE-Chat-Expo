import { StatusBar } from 'expo-status-bar';
import { toastConfig } from './components/toast/toast-config';
import Toast from 'react-native-toast-message';
import Navigation from './navigation/stack/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation/>
      <Toast config={toastConfig} />
    </>
  );
}
