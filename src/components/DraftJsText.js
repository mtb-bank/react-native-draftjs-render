/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import { Text } from 'react-native';

import loadAttributes from '../loadAttributes';

import defaultStyles from './defaultStyles';
import type { DraftJsTextPropsType } from './types';

const DraftJsText = (props: DraftJsTextPropsType): any => {
  const {
    text = "",
    data = {},
    inlineStyles = [],
    customStyles,
    type = "",
  } = props;
  let textElements = text;

  if (textElements) {
    textElements = loadAttributes({
      text,
      customStyles,
      inlineStyles,
      entityRanges: props.entityRanges,
      entityMap: props.entityMap,
      navigate: props.navigate,
      textProps: props.textProps,
      type,
    });

    const customStyle = customStyles ? customStyles[type] : undefined;
    const textAlignStyle = { textAlign: data.textAlignment };

    return (
      <Text
        style={[defaultStyles[type], textAlignStyle, customStyle]}
        {...props.textProps}
      >
        {textElements}
      </Text>
    );
  }

  const emptyTextStyle = customStyles ? customStyles.emptyText : undefined;

  return <Text style={emptyTextStyle} />;
};

export default DraftJsText;
