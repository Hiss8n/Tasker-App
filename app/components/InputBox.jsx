import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const InputBox = () => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useMutation(api.todos.addTodo);

  const handleSubmitTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({ text: newTodo.trim() });
        setNewTodo("");
        
      } catch (error) {
        console.log("Error", error);
        Alert.alert("Error", "Unable to add Task now 😒");
      }
    }
  };

  return (
 
    <View> 
    <View style={styles.input}>
      <TextInput
        style={styles.TextInput}
        onChangeText={setNewTodo}
        value={newTodo}
        placeholder="Write you task..."
        placeholderTextColor="#dedadaff"
        onSubmitEditing={handleSubmitTodo}
      />
      <TouchableOpacity onPress={handleSubmitTodo} disabled={!newTodo.trim()}>
        <Ionicons
          name="add-circle"
          color={!newTodo.trim() ? "gray" : "#12a9f5ff"}
          size={44}
        />
      </TouchableOpacity>
    </View>
    </View> 
   
  );
};
const styles = StyleSheet.create({
  input: {
  flexDirection: "row",
  
   width: 390,
   height: 70, 
    backgroundColor: "#5ff5f",
    borderColor: "white",
    marginTop:10
   
   
  },
  TextInput: {
    height: 50,
    borderColor: "#5C3C3C",
    borderWidth: 0.2,
    borderRadius: 8,
    width: 340,
    paddingHorizontal: 10,
    color: "#f8efefff",
    fontSize: 20, // text color
    borderColor: "gray",
    backgroundColor: "#bcbcbc46",
    marginLeft: 8,
  },
});

export default InputBox;
