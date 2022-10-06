import { Pressable } from "react-native";
import Subheading from "./Subheading";

const AppBarTab = (props) => (
  <Pressable>
    <Subheading color="textContrast" {...props} />
  </Pressable>
);

export default AppBarTab;
