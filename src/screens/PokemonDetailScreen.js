import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext'; // Importa o hook
import Icon from 'react-native-vector-icons/Ionicons';

const typeColors = { /* ... (cole o objeto de cores da versão anterior aqui) ... */ };

function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites(); // Usa o contexto

  const isFav = isFavorite(pokemon.id);

  const handleFavoritePress = () => {
    if (isFav) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.text}>#{pokemon.id.toString().padStart(3, '0')}</Text>

      <View style={styles.typesContainer}>
        {pokemon.types.map((typeInfo) => (
          <View key={typeInfo.type.name} style={[styles.typeBadge, { backgroundColor: typeColors[typeInfo.type.name] || '#68A090' }]}>
            <Text style={styles.typeText}>{typeInfo.type.name}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
        <Icon name={isFav ? "heart" : "heart-outline"} size={30} color={isFav ? "#e74c3c" : "#FFF"} />
        <Text style={styles.favoriteText}>{isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Habilidades</Text>
      {pokemon.abilities.map((abilityInfo) => (
        <Text key={abilityInfo.ability.name} style={styles.text}>- {abilityInfo.ability.name}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#1E1E1E' },
  image: { width: 250, height: 250, marginBottom: 10 },
  name: { color: '#FFF', fontSize: 32, textTransform: 'capitalize', fontWeight: 'bold' },
  typesContainer: { flexDirection: 'row', marginBottom: 20, marginTop: 10 },
  typeBadge: { paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, marginHorizontal: 5 },
  typeText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' },
  favoriteButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', padding: 10, borderRadius: 20, marginBottom: 20 },
  favoriteText: { color: '#FFF', marginLeft: 10, fontSize: 16 },
  title: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
  text: { color: '#DDD', fontSize: 18, textTransform: 'capitalize', marginTop: 5 },
});

export default PokemonDetailScreen;
