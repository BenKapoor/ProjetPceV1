import React from "react";

import { Container, TextH5 } from "../UI";

export default function DecodeScreen(props){
  const data = props.navigation.getParam("data", "NO-QR");
  console.log(data);
  return (
    <Container>
      <TextH5>{data}</TextH5>
    </Container>
  );
}
DecodeScreen.navigationOptions = {
  title: 'Decoded'
};