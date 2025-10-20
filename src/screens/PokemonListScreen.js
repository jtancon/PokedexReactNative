import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
  Image, ActivityIndicator, TextInput, Button, Alert
} from 'react-native';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

function PokemonListScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState(API_URL);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPokemonData = useCallback(async (url) => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const listResponse = await fetch(url);
      const listData = await listResponse.json();
      const detailPromises = listData.results.map(p => fetch(p.url).then(res => res.json()));
      const detailedPokemonData = await Promise.all(detailPromises);

      setPokemonList(prevList => [...prevList, ...detailedPokemonData]);
      setNextUrl(listData.next);
    } catch (e) {
      setError('Falha ao buscar dados. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    fetchPokemonData(nextUrl);
  }, []); // Apenas na montagem inicial

  const handleSearch = async () => {
    if (!searchQuery) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${searchQuery.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon não encontrado');
      const pokemon = await response.json();
      navigation.navigate('Details', { pokemon });
    } catch (e) {
      Alert.alert('Erro', e.message);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="#FFF" />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Nome ou número do Pokémon..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Buscar" onPress={handleSearch} color="#c23616" />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Layout em grade
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
        onEndReached={() => nextUrl && fetchPokemonData(nextUrl)} // Carrega mais ao chegar no fim
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E1E' },
  searchContainer: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  searchBar: { flex: 1, height: 40, backgroundColor: '#333', borderRadius: 10, color: '#FFF', fontSize: 16, paddingHorizontal: 10, marginRight: 10 },
  errorText: { color: 'red', textAlign: 'center', margin: 10 },
  card: { flex: 1, alignItems: 'center', margin: 5, padding: 10, backgroundColor: '#333', borderRadius: 10 },
  sprite: { width: 100, height: 100 },
  text: { color: '#FFF', fontSize: 16, textTransform: 'capitalize', marginTop: 5, fontWeight: 'bold' },
});

export default PokemonListScreen;
