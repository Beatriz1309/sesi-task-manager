import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Ajustado o nome para refletir a pasta com parênteses */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details/[id]" options={{ headerShown: true }} />
    </Stack>
  );
}