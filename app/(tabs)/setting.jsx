import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";

import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";

import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";

const SettingScreen = () => {
  const todos = useQuery(api.todos.getTodos);
  const allTodos = todos ? todos.length : 0;
  const CompletedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;

  const deleteAllTodos = useMutation(api.todos.deleteAllTodos);
  const active = parseInt(allTodos - CompletedCount);

  const handeleResetApp = () => {
    try {
      if (todos.length > 0) {
        Alert.alert("Do You want to reset app", "All data will be deleted.", [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => deleteAllTodos(),
          },
        ]);
      }
    } catch (error) {
      console.log("Error", error);
      Alert.alert("Could not reset app now, please try again later.");
    }
  };

  return (
    <LinearGradient
      LinearGradient
      colors={["#04041bde", "#303052ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View styles={styles.titleContainer}>
        <View style={styles.title}>
          <Ionicons name="settings" size={40} color="#494ee1ff" />

          <Text style={{ color: "#efefebff", fontSize: 30, paddingLeft: 10 }}>
            Settings
          </Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <LinearGradient
          colors={["#373745de", "#434351ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.wrapper}
        >
          {/* preference */}
          <View style={styles.progressStatsContainer}>
            <Text style={{ color: "#e1dfdfff", fontSize: 20 }}>
              Progress Status
            </Text>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.content}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#3125d1ff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="menu-outline" size={24} color="#cacdcfff" />
              </View>

              <View style={styles.totalCount}>
                <Text style={{ color: "#efede5ff", fontSize: 16 }}>
                  {todos ? todos.length : 0}
                </Text>
                <Text style={{ color: "#b4b3afff", fontSize: 16 }}>
                  Total Tasks
                </Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.content2}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "20%",
                  backgroundColor: "#2a892aff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="checkmark-circle" size={22} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text style={{ color: "#efede5ff", fontSize: 16 }}>
                  {CompletedCount}
                </Text>
                <Text style={{ color: "#b4b3afff", fontSize: 16 }}>
                  completed
                </Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.content3}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#cfdd0dff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="time-sharp" size={22} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text style={{ color: "#efede5ff", fontSize: 16 }}>
                  {active}
                </Text>
                <Text style={{ color: "#b4b3afff", fontSize: 16 }}>Active</Text>
              </View>
            </LinearGradient>
          </View>

          {/* Preferences */}
          <View style={styles.progressStatsContainer}>
            <Text style={{ color: "#e1dfdfff", fontSize: 20 }}>
              Preferences
            </Text>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pref1}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "20%",
                  backgroundColor: "#5d80bdff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  //marginLeft:18
                }}
              >
                <Ionicons name="moon" size={18} color="#cacdcfff" />
              </View>

              <View style={styles.totalCount}>
                <Text
                  style={{ color: "#d7d7d1ff", fontSize: 20, fontWeight: 800 }}
                >
                  Themes
                </Text>
                {/*  <Text style={{ color: "#b4b3afff", fontSize: 16 }}>
                  Total Tasks
                </Text> */}
              </View>

              <View
                style={{ position: "absolute", width: 10, marginLeft: 120 }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "#5d80bdff",
                      borderLeftWidth: 5,
                      width: 68,
                      borderWidth: 4,
                      paddig: 4,
                      height: 34,
                      flexDirection: "row",
                      alignContent: "space-evenly",
                      justifyContent: "space-between",
                      borderColor: "#5d80bdff",
                      borderRadius: 40,
                      borderWidth: 3,
                      borderLeftColor: "#dac9d5ff",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#dac9d5ff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#c5bac2ff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginLeft: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />

                    <View
                      style={{
                        backgroundColor: "#5d80bdff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#5d80bdff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginRight: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pref2}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "20%",
                  backgroundColor: "#de0eb7ff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="notifications" size={22} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text
                  style={{ color: "#d7d7d1ff", fontSize: 20, fontWeight: 800 }}
                >
                  Notification
                </Text>
                {/*  <Text style={{ color: "#b4b3afff", fontSize: 16 }}>
                  completed
                </Text> */}
              </View>

              <View
                style={{ position: "absolute", width: 10, marginLeft: 120 }}
              >
                <TouchableOpacity style={{ marginLeft: 16 }}>
                  <View
                    style={{
                      backgroundColor: "#de0eb7ff",
                      borderLeftWidth: 5,
                      width: 68,
                      borderWidth: 4,
                      paddig: 4,
                      height: 34,
                      flexDirection: "row",
                      alignContent: "space-evenly",
                      justifyContent: "space-between",
                      borderColor: "#de0eb7ff",
                      borderRadius: 40,
                      borderWidth: 3,
                      borderLeftColor: "#dac9d5ff",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#dac9d5ff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#c5bac2ff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginLeft: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />

                    <View
                      style={{
                        backgroundColor: "#de0eb7ff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#de0eb7ff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginRight: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pref3}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "20%",
                  backgroundColor: "#35c654ff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="archive" size={24} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text
                  style={{ color: "#d7d7d1ff", fontSize: 20, fontWeight: 800 }}
                >
                  Archieves
                </Text>
              </View>
              <View
                style={{ position: "absolute", width: 10, marginLeft: 120 }}
              >
                <TouchableOpacity style={{ marginLeft: 16 }}>
                  <View
                    style={{
                      backgroundColor: "#35c654ff",
                      borderLeftWidth: 5,
                      width: 68,
                      borderWidth: 4,
                      paddig: 4,
                      height: 34,
                      flexDirection: "row",
                      alignContent: "space-evenly",
                      justifyContent: "space-between",
                      borderColor: "#35c654ff",
                      borderRadius: 40,
                      borderWidth: 3,
                      borderLeftColor: "#dac9d5ff",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#dac9d5ff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#c5bac2ff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginLeft: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />

                    <View
                      style={{
                        backgroundColor: "#35c654ff",
                        width: 32,
                        height: 32,
                        borderWidth: 3,
                        borderColor: "#35c654ff",
                        borderRadius: "50%",
                        marginTop: -2,
                        marginRight: -2.5,
                        marginBottom: 20,
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>

          {/* Danger XOne */}
          <View style={styles.progressStatsContainer}>
            <Text style={{ color: "#e63e0bff", fontSize: 20 }}>
              Danger Zone
            </Text>

            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.danger}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "20%",
                  backgroundColor: "#e31e21ff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="trash-outline" size={24} color="#cacdcfff" />
              </View>

              <View style={styles.dangerText}>
                <Text style={{ color: "#d91e2dff", fontSize: 18 }}>
                  Reset App
                </Text>
                <TouchableOpacity onPress={handeleResetApp}>
                  <Ionicons
                    name="chevron-forward"
                    size={28}
                    color="#999393ff"
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>

            {/*   <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.content2}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#2a892aff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="checkmark-circle" size={22} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text style={{ color: "#efede5ff", fontSize: 16 }}>5</Text>
                <Text style={{ color: "#b4b3afff", fontSize: 16 }}>
                  completed
                </Text>
              </View>
            </LinearGradient>
 */}
            {/* 
            <LinearGradient
              colors={["#11112ade", "#303041ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.content3}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  backgroundColor: "#cfdd0dff",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="time-sharp" size={22} color="#cacdcfff" />
              </View>
              <View style={styles.totalCount}>
                <Text style={{ color: "#efede5ff", fontSize: 16 }}>2</Text>
                <Text style={{ color: "#b4b3afff", fontSize: 16 }}>Active</Text>
              </View>
            </LinearGradient>
             */}
          </View>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: "row",
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    backgroundColor: "#0d093bff",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    marginLeft: 0,
    marginRight: 3,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 20,
    width: "100%",
  },
  progressStatsContainer: {
    flexDirection: "column",
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    marginTop: 20,
    padding: 10,
    margin: 0,
  },
  content: {
    backgroundColor: "#0d093bff",

    height: 80,
    alignItems: "center",
    position: "relative",
    borderRadius: "red",
    flexDirection: "row",
    justifyContent: "flex-start", //justifyContent:'space-between',
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    borderLeftColor: "blue",
    marginTop: 20,
  },
  totalCount: {
    marginLeft: 15,
    marginBottom: 2,
    marginTop: 12,

    width: 260,
  },

  content2: {
    backgroundColor: "#0d093bff",
    height: 80,
    //width:320,
    alignItems: "center",
    borderRadius: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    borderLeftColor: "#45ef45",
    marginTop: 20,
  },

  content3: {
    backgroundColor: "#0d093bff",
    height: 80,
    alignItems: "center",
    borderRadius: "red",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    borderLeftColor: "yellow",
    marginTop: 20,
  },
  pref1: {
    backgroundColor: "#0d093bff",
    height: 80,
    //width:230,
    justifyContent: "center",

    alignItems: "center",
    // borderRadius: "red",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    //borderLeftColor: "#40daebff",
    marginTop: 20,
  },
  pref2: {
    backgroundColor: "#0d093bff",
    height: 80,
    //width:230,
    justifyContent: "center",

    alignItems: "center",
    // borderRadius: "red",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    //borderLeftColor: "#f747d6ff",
    marginTop: 20,
  },
  pref3: {
    backgroundColor: "#0d093bff",
    height: 80,
    //width:230,
    justifyContent: "center",

    alignItems: "center",
    // borderRadius: "red",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,
    //borderLeftColor: "#fc5480ff",
    marginTop: 20,
  },
  danger: {
    backgroundColor: "#0d093bff",

    height: 80,
    alignItems: "center",
    position: "relative",
    borderRadius: "red",
    flexDirection: "row",
    justifyContent: "flex-start", //justifyContent:'space-between',
    paddingLeft: 20,
    marginLeft: 2,
    marginRight: 3,
    borderRadius: 12,
    borderLeftWidth: 2,
    // borderTopLeftRadius:10,
    //borderBottomLeftRadius:20,

    marginTop: 20,
  },
  dangerText: {
    marginLeft: 15,
    marginBottom: 2,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingRight: 20,

    width: 260,
  },
});

export default SettingScreen;
