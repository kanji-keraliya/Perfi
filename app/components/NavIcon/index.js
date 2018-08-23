import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dimensions } from '../../styles';


const NavIcon = ({ tintColor, ...props }) => (
  <FontAwesome
    size={dimensions.iconSize}
    style={{ color: tintColor }}
    {...props}
  />
);

NavIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default NavIcon;
