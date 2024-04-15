import { Slot } from 'expo-router';
import { SessionProvider } from '../auth/ctx';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot screenOptions={{headerShown: false,}}/>
    </SessionProvider>
  );
}
