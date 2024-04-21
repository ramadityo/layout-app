import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.navbar}>
        <Image source={logoApp} style={styles.logo} />
        <Text>Logo</Text>
      </View>
      <Text>WASSAPDOC</Text>
      <View style={styles.container_full}>
        <Text>
          {`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis massa id imperdiet tincidunt. Nulla scelerisque faucibus laoreet. Pellentesque sollicitudin nisi tempus, tempus dolor ac, venenatis augue. Donec maximus diam et dui ultrices aliquet. Quisque sit amet arcu pretium, hendrerit purus vel, finibus nisl. Nam ex metus, maximus et aliquet id, posuere in arcu. Integer malesuada lacinia arcu vitae dapibus. Fusce non orci quis libero tristique aliquet ut quis mi. Cras consectetur nulla et leo congue dignissim. Vivamus id nunc vitae nisi pharetra malesuada et nec dolor. Morbi et consequat lectus. Sed sed posuere ligula, ut condimentum nunc.
        
            Ut quis imperdiet mauris. Fusce eget sagittis leo. Nulla ligula tortor, commodo nec dui imperdiet, maximus ultrices turpis. Donec finibus lacinia pharetra. Praesent tristique, mi ac commodo tincidunt, eros justo pretium nisl, eu ullamcorper tellus erat vel diam. Nunc fermentum turpis justo, blandit congue dolor pharetra eu. Aliquam quis velit commodo, mollis orci a, mollis mi.

            Duis rutrum placerat risus, eget rutrum turpis rutrum ut. Nulla facilisi. Aenean ornare viverra urna, non egestas massa fermentum sed. Sed dignissim luctus fermentum. Maecenas at nisl in urna bibendum blandit. Vivamus ullamcorper tempor sapien non fermentum. Curabitur a pulvinar turpis, in imperdiet ante. Pellentesque nec luctus metus, ut scelerisque magna. 
            Nunc quis diam non ex fermentum interdum. Duis ac mi ut nisl egestas molestie vitae sit amet enim. Donec est lectus, dictum ut auctor sit amet, elementum vitae est. Aenean posuere vulputate tellus, lobortis scelerisque mauris suscipit et. Morbi purus purus, egestas non erat at, bibendum finibus dui. Fusce pharetra ipsum sed mauris interdum ultrices. Nulla lacus enim, varius id metus ut, vehicula rutrum ex. Sed porta quam sit amet magna blandit vulputate. Etiam sed libero ac nisl ultricies dignissim tempus in est. Aenean ac pellentesque dolor, id imperdiet quam. Fusce eget convallis tellus, et suscipit ex. In sit amet eros ac metus placerat iaculis in sed nunc. Maecenas volutpat scelerisque arcu, nec egestas nisl lacinia et. Vestibulum sed tincidunt ligula. Aenean tristique magna elit, vitae scelerisque mauris lobortis at.

            Praesent efficitur pulvinar ultricies. Praesent ultricies posuere metus, eu feugiat tellus semper id. Quisque vitae nunc sit amet nunc finibus fermentum. Aenean mattis accumsan neque sit amet mollis. Cras commodo, enim eu mollis ullamcorper, felis felis sagittis nulla, a dignissim felis erat id lorem. Quisque condimentum cursus sagittis. Phasellus molestie tempor metus in porta. Phasellus varius, elit at malesuada condimentum, odio quam tincidunt sapien, nec scelerisque ex felis egestas nibh. Sed nec purus ornare, volutpat lorem eget, eleifend libero.
          `}
        </Text>
      </View>
    </ScrollView>
  );
}

const logoApp = require("./assets/app-assets/logo.png");

// SIZES

// const dimScreen = Dimensions.get('screen');

// SIZES

const styles = StyleSheet.create({
  logo:{
    resizeMode: 'contain',
    width: 50,
  },

  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 10
  },

  navbar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 100,
  },

  container_full:{
    // flex: 1,
    width: '100%',
    backgroundColor: 'red',
    height: '80%',
  }
});
