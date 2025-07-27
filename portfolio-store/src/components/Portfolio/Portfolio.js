import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

const projectsData = [
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", category: "Flayers" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", category: "Flayers" }
];

class Portfolio extends Component {
  state = {
    selectedFilter: 'All',
  };

  filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  getFilteredProjects = () => {
    const { selectedFilter } = this.state;
    if (selectedFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === selectedFilter);
  };

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    );
  }
}

export default Portfolio;