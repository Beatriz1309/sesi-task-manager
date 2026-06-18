import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="login" // 🔥 começa no login
      screenOptions={{
        headerBackTitle: '',
        headerTintColor: '#007AFF',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="login" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="details/[id]" 
        options={{ headerShown: true }} 
      />
    </Stack>
  );
}