import { useEffect } from "react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { Input } from "react-native-elements";

interface CreateTodoForm {
  text: string;
}

const CreateTodoScreen = () => {
  const { register, watch, setValue } = useForm<CreateTodoForm>({
    defaultValues: {
      text: "",
    },
  });
  const { text } = watch();
  useEffect(() => {
    register("text");
  }, []);
  return (
    <View>
      <Input
        onChangeText={value => setValue("text", value)}
        value={text}
        multiline
        placeholder="Input test text"
        label="Test Text"
      />
    </View>
  );
};

export default CreateTodoScreen;
