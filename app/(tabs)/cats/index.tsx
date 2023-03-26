import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setCats(json);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Link href={`/cats/${item.id}`} asChild>
      <Pressable style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View>
      <Stack.Screen options={{ title: "Cats" }} />
      <FlatList
        data={cats}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Cats;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
