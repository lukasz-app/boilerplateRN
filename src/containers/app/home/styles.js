import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  contentContainerWrapper: {
    flex: 7,
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerNested: {
  },
  item: {
    backgroundColor: 'blue',
    height: 100,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'stretch',
    flex: 1,
    marginTop: 30,
  },
  buttonPlaceholder: {
    alignSelf: 'stretch',
    flex: 2,
    marginVertical: 30,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 50,
  },
});
