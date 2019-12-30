// Components/TicketDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getTicketDetailFromApi } from '../Api/api'

class TicketDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ticket: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    // getTicketDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
    //   this.setState({
    //     ticket: data,
    //     isLoading: false
    //   })
    //   console.log('ticket:', this.state.ticket)
    // })
console.log('id:',this.props.navigation.state.params.idTicket);
    fetch('https://bridge.buddyweb.fr/api/evolve/factures/' + this.props.navigation.state.params.idTicket)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((result) => { 
        console.log(result);
        this.setState({ ticket: result });
        console.log(this.ticket) 
      }).catch((error) => console.error(error));
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayTicket() {
    if (this.state.ticket != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.ticket.magasin_name}</Text>
          {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayTicket()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

export default TicketDetail