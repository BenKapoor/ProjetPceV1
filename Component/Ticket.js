import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';
import ticket from '../Helper/data'
import TicketItem from './TicketItem'

class Ticket extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header}>
            <Left style={{paddingRight: 250, paddingTop: 20}}>
                <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
            </Left>
            </Header>
          <View style={styles.main_container}>           
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
              data={ticket}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <TicketItem ticket={item}/>}
            />
      </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 5,
        textAlign: 'center'
    },
    header: {
      backgroundColor: '#a5d022'
    },
    main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
});
export default createAppContainer(Ticket);