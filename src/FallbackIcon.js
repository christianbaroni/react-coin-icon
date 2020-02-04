import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const sx = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#ffffff',
    fontWeight: 600,
    textTransform: 'uppercase',
  }
});

const calculateFontSize = (symbol, width) => {
  if (!symbol) return 0;
  else if ((width < 30) || (symbol.length === 4)) return 11;
  else if (symbol.length > 4) return 9;
  return 13;
};

const INVALID_SYMBOL_CHARACTERS_REGEX = /[^a-zA-Z0-9]/g;

const FallbackIcon = ({
  style,
  symbol = '',
  textStyles,
  width,
  ...props
}) => {
  const formattedSymbol = symbol
    .replace(INVALID_SYMBOL_CHARACTERS_REGEX, '')
    .substring(0, (width < 30) ? 1 : 5);

  return (
    <View {...props} style={[sx.container, style]}>
      <Text
        style={[sx.text, {
          fontSize: calculateFontSize(formattedSymbol, width),
          ...textStyles,
        }]}
      >
        {formattedSymbol}
      </Text>
    </View>
  );
}

FallbackIcon.propTypes = {
  bgColor: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string,
  textStyles: PropTypes.object,
};

FallbackIcon.defaultProps = {
  bgColor: '#3A3D51',
};

export default React.memo(FallbackIcon);
