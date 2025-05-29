/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import DraftJsText from './DraftJsText';
import type { OrderedListItemPropsType } from './types';

const styles = StyleSheet.create({
  orderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderedListItemNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const OrderedListItem = (props: OrderedListItemPropsType): any => {
  const {
    counter = 1,
    separator = '.',
    customStyles,
    depth = 0,
    defaultMarginLeft = 8,
  } = props;

  const orderedListItemCustomStyleContainer = customStyles && customStyles.orderedListItemContainer;
  const orderedListItemCustomStyleNumber = customStyles && customStyles.orderedListItemNumber;

  const marginLeftWithDepth = (
    orderedListItemCustomStyleNumber && orderedListItemCustomStyleNumber.marginLeft)
    ? depth * orderedListItemCustomStyleNumber.marginLeft : depth * defaultMarginLeft;

  const marginLeftWithoutDepth = 24;
  const marginLeft = depth > 0 ? marginLeftWithDepth : marginLeftWithoutDepth;

  return (
    <View style={[styles.orderedListItemContainer, orderedListItemCustomStyleContainer]}>
      <Text
        style={[styles.orderedListItemNumber, orderedListItemCustomStyleNumber, { marginLeft }]}
      >
        {counter}
        {separator}
      </Text>
      <DraftJsText
        {...props}
      />
    </View>
  );
};

export default OrderedListItem;
