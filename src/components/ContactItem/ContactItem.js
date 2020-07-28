import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, deleteContact }) => (
  <>
    &#9742; {name} : {number}
    <button type="button" onClick={deleteContact}>
      &#10008;
    </button>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
