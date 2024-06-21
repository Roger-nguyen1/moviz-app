import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { ListItem, Image } from "@rneui/themed";

export default function MoviesList() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>moviesList screen</Text>
    </View>
  );
}
