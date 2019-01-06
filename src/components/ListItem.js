import React, { Component } from "react";
import { View, Text } from "react-native";
import CardSection from "./shared/CardSection";

class ListItem extends Component {
  render() {
    // console.log(this.props);
    return (
      <CardSection>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{this.props.library.item.title}</Text>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  wrapper: {
    paddingTop: 15,
    paddingBottom: 15
  }
};

export default ListItem;
