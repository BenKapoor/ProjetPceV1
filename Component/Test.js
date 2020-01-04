import React, { Component } from 'react';
 
import {
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { CameraRoll } from 'react-native';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import htmlToImage from 'html-to-image';

export default class Example extends Component {
    constructor(props) {
        super(props);
        
      }

    async createPDF() {

        let filePath = await Print.printToFileAsync({
          html: "<h1>PDF TEST</h1>",
          width : 12,
          height : 92,
          base64 : false
        });
        
        alert('PDF Generated', filePath.uri);
        console.log('uri:',filePath.uri)
        console.log('nom:', )
        const file_path = FileSystem.documentDirectory + 'evolve/' 

        FileSystem.moveAsync({
            from: filePath.uri, // the path to where the photo is saved in the cache directory
            to: file_path
        })
        .then((response) => {
        // next: add code for storing the file name and updating the state
        });
        console.log('new uri:',file_path)
        FileSystem.getInfoAsync(file_path)

        CameraRoll.saveToCameraRoll( filePath.uri, 'pdf');
      }

      
 
  render() {
    return(
      <SafeAreaView style={styles.container}>
          <View style={styles.container_image}>
            <TouchableHighlight onPress={this.createPDF}>
            <Text>Create PDF</Text>
            </TouchableHighlight>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
    textinput: {
        marginLeft: 75,
        marginRight: 75,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        margin: 4,
        
    },
    view_container: {
        flex: 1
    },
    button:{
        marginLeft: 75,
        marginRight: 75,
        backgroundColor: '#a5d022'
    },
    container_image:{
        flex:1,
        marginLeft: 75,
        marginRight: 75,
        marginTop: 75
    },
    image:{
        width: 240, 
        height: 240,
    },
    message:{
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    linkSignup:{
        color:'#a5d022',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
      backgroundColor: '#a5d022'
    }, 
    button2: {
        
    }
  })