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
    getTicketDetailFromApi(this.props.navigation.state.params.idTicket).then(data => {
      this.setState({
        ticket: data,
        isLoading: false
      })
    })
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
          <Text>{this.state.Ticket.title}</Text>
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