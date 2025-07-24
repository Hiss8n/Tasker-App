import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheet, Text, View } from "react-native";
import ShowDate from "./Date";

const CompletedRatings = () => {
  const todos = useQuery(api.todos.getTodos);

  const totalCount = todos ? todos.length : 0;

  const CompletedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const progressIndicator =
    totalCount > 0 ? (CompletedCount / totalCount) * 100 : 0;
  /* console.log(progressIndicator); */
  

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerContainer2}>
            <Ionicons size={36} name="book-outline" style={styles.bookIcons} />
            <View>
              <View>
                <Text style={styles.title}>My Day's Tasks⌚</Text>
              </View>
              <Text style={styles.barText}>
                <ShowDate/> completed {CompletedCount} out of {totalCount} tasks
              </Text>
            </View>

            {/* all todos */}
          </View>
        </View>
      </View>

      {/*  <View style={styles.barContainer}>

      <View style={styles.progressContent}>

        <View style={styles.bar}>
          <LinearGradient
            colors={["#1a8e46d8", "#10e846ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.progressFill,{width:`${progressIndicator}`}]}
          />
        </View>

        <Text style={styles.percentage}>{Math.ceil(progressIndicator)}%</Text>
      </View>
       </View>
 */}
 <View style={styles.ProgressBarContainer}>
  <View style={styles.progressBarContent}>
    <View style={styles.barContainer}>
     
      <LinearGradient
            colors={["#1a8e46d8", "#10e846ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.progressFill,{width:`${progressIndicator}%`}]}

      />
     

    </View>
    <Text style={{fontSize:16,marginLeft:10,color:'#ccc'}}>{Math.ceil(progressIndicator)}%</Text>

  </View>

 </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    width: 390,
    backgroundColor: "#1a1329ff",
    borderRadius: 8,
    paddingBottom: 20,
    marginBottom:0,
    marginTop:0
  },

  title: {
    fontFamily: "poppins",
    fontSize: 30,
    marginLeft: 12,
    marginTop: 10,
    color: "#12a9f5ff",
  },

  headerContainer2: {
    flexDirection: "row",
    width: 315,
    alignItems: "center",
    marginLeft: 16,
  },

  barText: {
    fontFamily: "poppins",
    fontSize: 16,
    marginLeft:-25,
    color: "#dadfdaff",
  },

  bookIcons: {
    color: "#fff",
  },
  ProgressBarContainer:{
    flexDirection:'row',
    height:40,
    borderRadius:2,
    alignItems:'center' 
  },
  progressBarContent:{
    flexDirection:'row',
    height:30,
    width:'100%',
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:0,
    marginLeft:0 

  },
  barContainer:{
    width:324,
    backgroundColor:'#ccc',
    height:6,
    marginLeft:0,
    borderRadius:2
  },
  progressFill:{
   height:'100%',
   borderRadius:4
  }


});

export default CompletedRatings;
