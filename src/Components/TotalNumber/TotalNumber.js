import React from 'react';
import { connect } from 'react-redux';

const TotalNumber = ({ total }) => {
  return (
    <div>
      <p>Number of contacts: {total}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  total: state.contacts.items.length,
});

export default connect(mapStateToProps)(TotalNumber);
