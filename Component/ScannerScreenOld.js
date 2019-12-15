import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
} from 'react-native'
import { ExpoScanner } from './ExpoScanner';

class ScannerScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener(
      'didFocus',
      () => this.setState({ isFocused: true }),
    );
    this.blurListner = this.props.navigation.addListener(
      'willBlur',
      () => this.setState({ isFocused: false }),
    );
  }
  componentWillUnmount() {
    this.focusListner.remove();
    this.blurListner.remove();
  }

  render() {
    if (!this.state.isFocused) {
      return (
        <SafeAreaView>
          <ActivityIndicator size='large' />
        </SafeAreaView>
      );
    }
    return (<ExpoScanner navigation={this.props.navigation} />);
  }
}

const styles = {
  container: {
    flexGrow: 1
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
        
export default ScannerScreen;