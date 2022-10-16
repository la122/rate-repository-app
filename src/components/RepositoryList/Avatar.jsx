import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});

const Avatar = ({ uri }) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri,
      }}
    />
  );
};

export default Avatar;
