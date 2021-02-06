import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Greettop: {
    flex: 1,
    backgroundColor: 'green',
    borderBottomRightRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GreettopText: {
    fontSize: 50,
    fontWeight: '800',
  },
  Greetbottom: {
    width: '100%',
    backgroundColor: 'green',
    height: '50%',
  },
  info: {
    width: '100%',
    height: '25%',
    paddingHorizontal : 5,
  },
  buttonPart: {
    width: '100%',
    
    backgroundColor : 'yellow',
    
  },
});

export default styles;
