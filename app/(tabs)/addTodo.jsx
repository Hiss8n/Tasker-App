import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CompletedRatings from "../components/completedRatings";
import EmptyState from "../components/EmptyState";
import InputBox from "../components/InputBox";
import Spinner from "../components/Spinner";
const AddTodo = () => {
  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  const isLoading = todos === undefined;

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  

 

  const handleDeleteTodo = async (id) => {
    try {
      Alert.alert("Delete task", "Do you want to delete this tasks?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTodo({ id }),
        },
      ]);
    } catch (error) {
      console.log("error", error);
      Alert.alert("Error", "Can not delete task now.");
    }
  };

  const handleToggleBtn = async (id) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error", error);
    } finally {
      return;
    }
  };

  const handleEditTodo = (todo) => {
    setEditText(todo.text);
    setEditingId(todo._id);
  };
  const handleCancelEdit = () => {
    setEditText("");
    setEditingId(null);
    return
  };
  const handleSaveEdit = async () => {
    if (editingId) {
      try {
        await updateTodo({ id: editingId, text: editText.trim() });
        setEditingId(null);
        setEditText("");
      } catch (error) {
        console.log("Error", error);
        Alert.alert("Error", "failed to update task!,try again please");
      }
    }
  };

  const handleKeyDown=async(e)=>{
    if(e.key==='Enter'){
      console.log(e.target.value)
    }
  }

  const renderTodoItem = ({ item }) => {
    const isEditing = editingId === item._id;
    return (
      <View>
        <View style={styles.todoContainer} key={item._id}>
          <LinearGradient
            colors={["#090952de", "#212141ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.main}
          >
            <View style={styles.todosState}>
              <TouchableOpacity
                style={styles.TodoBtn}
                onPress={() => handleToggleBtn(item._id)}
              >
                {!item.isCompleted ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={26}
                    color="#bcbebea8"
                  />
                ) : (
                  <Ionicons
                    name="checkmark-circle"
                    size={26}
                    color="#52c665ff"
                  />
                )}
              </TouchableOpacity>
            </View>
            {isEditing ? (
              <View style={styles.editContainer}>

                <TextInput
                //ref={refInpout}
                style={styles.input}
                placeholder={item.text}
                autoFocus
    
                onChangeText={setEditText}
                placeholderTextColor='#dcd9d9ff'
                //onKeyPress={(e)=>handleKeyDown(e)}
                
                
                />

                <View style={styles.editBtns}>
                  <TouchableOpacity
                  onPress={handleCancelEdit}
                  style={{backgroundColor:'#cedc0eff',width:80,height:30,padding:2,borderRadius:4}}
                  >
                     <Text style={{color:'#ffffff',fontSize:18,alignSelf:'center'}}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={handleSaveEdit}
                  style={{backgroundColor:'#1de00bff',width:80,height:30,padding:2,borderRadius:4}}
                  >
                  <Text style={{color:'#ffffff',fontSize:18,alignSelf:'center'}}>Save</Text>
                  </TouchableOpacity>
                </View>

              </View>

            ):(  
            

         <View style={styles.updateTodos}>
              
               
                <View style={styles.textContainer}>
                  
                   <Text
                      style={[
                      item.isCompleted && styles.completed,
                      styles.todoText,
                    ]} 
                  >
                  {item.text} 
                  </Text> 

                </View>
 
                <View
                  style={{
                    width: 70,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
               <TouchableOpacity   onPress={() => handleDeleteTodo(item._id)} >
                    <Ionicons name="trash-bin" size={24} color="#ea7e5aff" />
                  </TouchableOpacity> 


                       
                  <TouchableOpacity   onPress={() => handleEditTodo(item)}  >
                    <Ionicons
                      name="pencil"
                      size={24}
                      color="#f8eb77ff"
                      style={styles.editTodo}
                    />
                  </TouchableOpacity> 
 

                </View>
                 
                

              </View>  
            )}
            

 

            

        
          </LinearGradient>
        </View>
      </View>
    );
  };

  if (isLoading) return <Spinner />;

  return (
    <LinearGradient
      colors={["#070118d8", "#130c2bd8", "#372957ff"]}
      start={{ x: 0, y: 0 }} // Middle-top
      end={{ x: 0, y: 1 }} // Middle-bottom
      style={styles.container}
    >
      <SafeAreaView>
         {/*  */} {/* <ShowDate/> */}
        <CompletedRatings />
        
        <InputBox />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={styles.todoList}
          contentContainerStyle={styles.todoListContent}
          ListEmptyComponent={<EmptyState />}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ["#4cc4c4", "#1ecdaaff"],
  },
  main: {
    height: 100,
    flexDirection: "row",
    width: 384,
    marginLeft: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },

  todoContainer: {
    flex: 1,
    marginTop: 12,

    /*  backgroundColor: "#2F2F2F", */

    /*  alignContent:'space-between',
    height: 100,
    width:'100%',
    padding: 2,
    marginTop: 2,
    marginLeft: 0,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 0,
    marginBottom: 12, */
  },
  todosState: {
    flexDirection: "row",
    height: 50,
    marginRight: 0,
    /*   flexDirection: "row",
    alignItems: "center", */
  },
  textContainer: {
    flexDirection: "row",
    alignContent: "center",
    width: 250,
    height: 80,
    marginLeft: -30,
  },
  todoText: {
    //height:100,
    fontSize: 18,
    fontFamily: "poppins",
    color: "#dfdfe5ff",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#7e7b7bff",
    fontSize: 16,
    opacity: 0.5,
  },
  editTodo: {
    paddingLeft: 12,
  },
  updateTodos: {
    flexDirection: "row",
    //backgroundColor:'white',

    // height: 50,
    /*   width:300, */

    /*  flexDirection: "row",
    paddingLeft: 50, */
  },
  emptySpace: {
    backgroundColor: "",
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  editContainer: {
    flexDirection: "column",
     width:330,
     height:98,
     margin:4,
     borderRadius:10,
   //backgroundColor:'red'
  },
  editBtns:{
    height:50,
    width:200,
    //backgroundColor:'red',
    flexDirection:'row',
   justifyContent:'space-evenly',
   alignSelf:'flex-end',
    alignItems:'center',
   // backgroundColor:'white'
  },
  input:{
    color:'#ececf4ff',
    borderWidth:1,
    borderColor:'#868383ff',
    borderRadius:6,
    height:36,
    fontSize:18,
    paddingTop:1,
    marginTop:1,
    paddingLeft:2,
    width:290,
    
// marginTop:10

  },
  placeholderText:{
  
  }
});

export default AddTodo;
