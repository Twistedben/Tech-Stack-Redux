import React, { Component } from 'react';
import { FlatList } from 'react-native'; 
import { connect } from 'react-redux';
import ListItem from './ListItem';

// Has props from the mapStateToProps() method, this.props, which is state.libraries
class LibraryList extends Component {
  // Helper method to be called as a function from the renderItem prop on FlatList
  renderItem(library) {
    // We are passing into the class component ListItem the library prop so now, this.props.library can be called inside the ListItem component
    return <ListItem library={library} />
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      /> 
    );
  }
}

// Takes global state object (app state from store) map the state to provide props to LibraryList component
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
