import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const products = [
  { name: "Nike Metcon 2", price: "130", color: "red", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "green", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "blue", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg" },
  { name: "Nike Metcon 2", price: "130", color: "black", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg" },
  { name: "Nike free run", price: "170", color: "black", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg" },
  { name: "Nike Metcon 3", price: "150", color: "green", img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg" }
];

class Store extends Component {
  state = {
    icon: 'view_list',
  };

  handleSwitch = () => {
    this.setState(prevState => ({
      icon: prevState.icon === 'view_list' ? 'view_module' : 'view_list',
    }));
  };

  render() {
    const { icon } = this.state;
    return (
      <div className="store">
        <IconSwitch icon={icon} onSwitch={this.handleSwitch} />
        {icon === 'view_list' ? (
          <ListView items={products} />
        ) : (
          <CardsView cards={products} />
        )}
      </div>
    );
  }
}

export default Store;