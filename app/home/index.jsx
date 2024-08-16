import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "../../helper/common";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CategoryList from "../../components/categories"

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  const [search, setSearch] = useState("");
  const searchInputRef=useRef(null)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, { paddingTop }]}>
        <View style={styles.header}>
          <Pressable>
            <Text style={styles.title}>Pixels</Text>
          </Pressable>
          <Pressable>
            <FontAwesome6
              name="bars-staggered"
              size={22}
              color={theme.colors.neutral(0.7)}
            />
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ gap: 15 }}>
          <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
              <Feather
                name="search"
                size={24}
                color={theme.colors.neutral(0.4)}
              />
            </View>
            <TextInput
              placeholder="Search for photos..."
              value={search}
              ref={searchInputRef}
              onChangeText={(value) => setSearch(value)}
              style={styles.searchInput}
            />
            {search ? (
              <Pressable onPress={()=>setSearch('')} style={styles.closeIcon}>
                <Ionicons
                  name="close"
                  size={24}
                  color={theme.colors.neutral(0.6)}
                />
              </Pressable>
            ) : (
              ""
            )}
          </View>
        </ScrollView>
      </View>
      {/* Categories */}
      <View>
        <CategoryList/>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.neutral(0.9),
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    padding: 6,
    paddingLeft: 10,
    borderRadius: theme.radius.lg,
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    fontSize: hp(1.8),
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 8,
    borderRadius: theme.radius.sm,
  },
  categories:{

  }
});
