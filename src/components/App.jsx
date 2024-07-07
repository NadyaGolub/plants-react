import { Component } from 'react';
import { CardList } from './CardList/CardList';
import plants from '../plants.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { CardForm } from './CardForm/CardForm';

export class App extends Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    const savePlants = localStorage.getItem('plants');
    if (savePlants !== null) {
      const parsePlants = JSON.parse(savePlants);
      this.setState({ plants: parsePlants });
      return;
    }
    this.setState({ plants: plants });
  }

  componentDidUpdate(PrevProps, prevState) {
    if (prevState.plants !== this.state.plants) {
      localStorage.setItem('plants', JSON.stringify(this.state.plants));
    }
  }

  deleteCard = (plantId) => {
    this.setState(prevState => {
      return {
        plants: prevState.plants.filter(plant => plant.id !== plantId)
      };
    });
   };
  
  addCard = newCard => {
    this.setState(prevState => {
      return {
        plants: [...prevState.plants, newCard]
      }
    });
}

  render() {
    return (
      <Layout>
        <CardForm onSubmit={this.addCard} />
        <CardList items={this.state.plants} onDelete={this.deleteCard } />
        <GlobalStyle />
      </Layout>
    );
  }
}
