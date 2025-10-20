import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext'; // Importa o hook

function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites(); // Pega a lista de favoritos do contexto

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Você ainda não tem Pokémon favoritos.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { pokemon: item })}
          >
            <Image
              style={styles.sprite}
              source={{ uri: item.sprites.other['official-artwork'].front_default }}
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E1E', paddingTop: 10 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' },
  emptyText: { color: '#FFF', fontSize: 18 },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: 5,
    fontWeight: 'bold',
  },
});


export default FavoritesScreen;
