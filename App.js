import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Text, View } from 'react-native'

class App extends Component {
  constructor() {
    super()
    this.state = {
      massaTubuh: '',
      tinggiBadan: '',
      hasil: '',
    };
  }
  
  calculateSum = () => {
    const { massaTubuh, tinggiBadan } = this.state;
  
    this.setState({
      hasil: (massaTubuh * 10000) / Math.pow((tinggiBadan),2)
    });
  }
  render() {
    var beratBadan;
    if(this.state.hasil < 18.5){
      beratBadan = 'Berat badan anda kurang'
    }
    else if(this.state.hasil>=18.5 && this.state.hasil<=24.9){
      beratBadan = 'Berat badan ideal'
    }
    else if(this.state.hasil>=25.0 && this.state.hasil<=29.9){
      beratBadan = 'Berat badan berlebih'
    }
    else if(this.state.hasil>=30.0 && this.state.hasil<=39.9){
      beratBadan = 'Berat badan sangat berlebih'
    }
    else if(this.state.hasil>=39.9){
      beratBadan = 'Obesitas'
    }
    else{
      beratBadan = 'Udah Ganteng dah'
    }

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>I&nbsp;&nbsp;M&nbsp;&nbsp;T</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Massa&nbsp;(kg)</Label>
              <Input 
                onChangeText={(massaTubuh) => this.setState({massaTubuh})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Tinggi&nbsp;(cm)</Label>
              <Input 
                onChangeText={(tinggiBadan) => this.setState({tinggiBadan})}
              />
            </Item>
          </Form>
          <Button block info onPress={this.calculateSum}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Hitung IMT</Text>
          </Button>
          {
            this.state.hasil ?
            <View style={{ paddingVertical: 10, alignItems: 'center' }}>
              <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                <Text>Massa Tubuh:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.massaTubuh}</Text>
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                <Text>Tinggi Badan:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.tinggiBadan}</Text>
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                <Text>Indeks Massa Tubuh:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.hasil}</Text>
              </View>
              <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                <Text>Diagnosa:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{beratBadan}</Text>
              </View>
            </View>
            : null
          }
        </Content>
      </Container>
    );
  }
}

export default App;