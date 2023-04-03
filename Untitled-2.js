// import React, { useState } from "react";
// import {
//   StyleSheet,
//   ActivityIndicator,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
// } from "react-native";

// const App = () => {
//   const [getValue, setValue] = useState(0);

//   const [loading, setLoading] = useState(false);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={{ padding: 50, backgroundColor: "blue", borderRadius: 50 }}
//         onPress={() => {
//           // setValue(getValue + 2);
//           // setValue(i => i + 1);
//           // console.log(Math.random() * 100);
//           setLoading(!loading);
//         }}
//       >
//         <Text>Click me</Text>
//       </TouchableOpacity>
//       {loading && <ActivityIndicator />}
//       <Image
//         style={{ width: 100, height: 100 }}
//         resizeMode="contain"
//         source={
//           getValue % 2 == 0
//             ? require("./src/assets/pngwing.com.png")
//             : require("./src/assets/bg.jpg")
//         }
//       />
//       <Text>Counter is {getValue}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#7CA1B4",
//     // flexDirection: 'row',
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
// });

// export default App;



import React, from "react";
import { StyleSheet, View, Image, Text, } from "react-native";

const App = () => {
  //Hooks are state management, used for rerendering UI elements
 

  // var name = "Hello Owais";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setValue("Hello owais");
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>

      <Text>{getValue}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={require("./src/assets/pngwing.com.png")}
      />
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={require("./src/assets/pngwing.com.png")}
      />
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={require("./src/assets/pngwing.com.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7CA1B4",
    // flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default App;


