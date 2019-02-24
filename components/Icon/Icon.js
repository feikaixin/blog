import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  <span>
    <i className={`fa${icon==='github'?'b':'s'} fa-${icon}`} style={{marginRight:'4px'}}/>
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;