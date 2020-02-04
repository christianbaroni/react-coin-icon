import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FallbackIcon from './FallbackIcon';
import * as CoinIcons from './icons';

const sx = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f8',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

const CoinIcon = ({
  bgColor,
  fallbackRenderer,
  size,
  style,
  symbol = '',
  ...props
}) => {
  const formattedSymbol = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();

  return (
    <View
      {...props}
      style={[
        sx.container,
        {
          borderRadius: size / 2,
          height: size,
          width: size,
        },
        style,
      ]}
    >
      {createElement(CoinIcons[formattedSymbol] || fallbackRenderer, {
        bgColor,
        height: size,
        symbol: formattedSymbol,
        width: size,
      })}
    </View>
  );
}

CoinIcon.propTypes = {
  bgColor: PropTypes.string,
  fallbackRenderer: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

CoinIcon.defaultProps = {
  fallbackRenderer: FallbackIcon,
  size: 32,
};

export default React.memo(CoinIcon);
