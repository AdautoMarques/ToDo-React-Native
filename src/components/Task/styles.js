import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    backgroundColor: '#23395d',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10
  },

  taskCircle: {
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 12,
    borderColor: '#B0BEC5'
  },

  taskText: {
    color: '#FFFFFF',
    fontSize: 16,
    minWidth: 180,
    maxWidth: 180,
    paddingHorizontal: 15
  },

  iconImage: {
    width: 25,
    height: 25,
  }
})