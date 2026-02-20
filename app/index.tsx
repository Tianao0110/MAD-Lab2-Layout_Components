import React from "react";
import { SafeAreaView } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Index() {
  return(
    <SafeAreaView style = {{flex: 1}}>
      <ToDoForm/>
      <ToDoList/>
    </SafeAreaView>
  );
}
