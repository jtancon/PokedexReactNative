import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Biblioteca de ícones

// Importe o Provedor
import { FavoritesProvider } from './src/contexts/FavoritesContext';

// Importe as telas
import PokemonListScreen from './src/screens/PokemonListScreen';
import PokemonDetailScreen from './src/screens/PokemonDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen'; // Nova tela

const Stack = createNativeStackNavigator();

function App() {
  return (
    // Envolvemos tudo com o FavoritesProvider
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="List"
          screenOptions={{
            headerStyle: { backgroundColor: '#c23616' }, // Cor primária da Pokédex
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen
            name="List"
            component={PokemonListScreen}
            options={({ navigation }) => ({
              title: 'Pokédex',
              headerRight: () => ( // Adiciona botão para ir aos favoritos
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                  <Icon name="heart" size={25} color="#FFF" style={{ marginRight: 15 }} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Details"
            component={PokemonDetailScreen}
            options={({ route }) => ({
              title: route.params.pokemon.name.charAt(0).toUpperCase() + route.params.pokemon.name.slice(1),
            })}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ title: 'Meus Favoritos' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

export default App;
