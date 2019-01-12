import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager
} from "react-native";
import CardSection from "./shared/CardSection";
import { connect } from "react-redux";
import * as actions from "./../actions/SelectedLibrary";

const mapStateToProps = (state, componentProps) => {
  return {
    showDescription:
      state.selectedLibraryItemId === componentProps.library.item.id
  };
};

class ListItem extends Component {
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.showDescription) {
      LayoutAnimation.spring();
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <View style={styles.wrapper}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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

export default connect(
  mapStateToProps,
  actions
)(ListItem);
