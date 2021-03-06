import React, { Component, PropTypes } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
  itemContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  itemIcon: {
    alignItems: 'center',
    backgroundColor: '#dbdbdb',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: -3,
    top: -3,
    width: 20,
  },
  itemImage: {
    borderRadius: 27,
    height: 54,
    width: 54,
  },
});

export class SelectedUserListItem extends Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.remove(this.props.user);
  }

  render() {
    const { username } = this.props.user;

    return (
      <View
        style={styles.itemContainer}
      >
        <View>
          <Image
            style={styles.itemImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
          <TouchableOpacity onPress={this.remove} style={styles.itemIcon}>
            <Icon
              color={'white'}
              name={'times'}
              size={12}
            />
          </TouchableOpacity>
        </View>
        <Text>{username}</Text>
      </View>
    );
  }
}
SelectedUserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
  remove: PropTypes.func,
};

export class SelectedUserList extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(user) {
    return (
      <SelectedUserListItem user={user} remove={this.props.remove} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.renderRow}
        horizontal
        style={styles.list}
      />
    );
  }
}
SelectedUserList.propTypes = {
  dataSource: PropTypes.object,
  remove: PropTypes.func,
};

export default SelectedUserList;