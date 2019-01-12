import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

const mapStateToProps = state => {
  return {
    libraryList: state.libraries
  };
};

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <View>
        <Text> Here is the data you ordered</Text>
        <FlatList
          data={this.props.libraryList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(LibraryList);
