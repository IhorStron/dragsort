
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DragSortableView } from "react-native-drag-sort";

const { width } = Dimensions.get("window");

const itemWidth = width * 1;
const itemHeight = 60;

const initialData = [
  { id: "1", label: "🍏 Apple" },
  { id: "2", label: "🍌 Banana" },
  { id: "3", label: "🍉 Watermelon" },
  { id: "4", label: "🍓 Strawberry" },
  { id: "5", label: "🍊 Orange" },
];

const App: React.FC = () => {
  const [data, setData] = useState(initialData);

  return (
    <View style={styles.container}>
      <DragSortableView
        dataSource={data}
        parentWidth={width}
        childrenWidth={itemWidth}
        childrenHeight={itemHeight}
        keyExtractor={(item) => item.id}
        onDataChange={(newData) => setData(newData)} 
        marginChildrenTop={20}   
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#f5f5f5",
  },
  item: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;



