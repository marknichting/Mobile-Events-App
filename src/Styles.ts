import { StyleSheet } from "react-native"

export const { container, rowStyle, columnStyle } = StyleSheet.create({
    container: {
    rowGap: 20,
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  rowStyle: {
    flexDirection: 'row',
    padding: 10,
    width: '75%',
    columnGap: 10,
    justifyContent: 'space-evenly'
    // borderColor: 'red',
    // borderWidth:1,
  },
  columnStyle: {
    flex: 1,
  }
});

