/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { connect } from 'react-redux';
import { JoinEditor } from './view';
import { setJoinsForLayer } from '../../../actions/store_actions';

function mapDispatchToProps(dispatch) {
  return {
    onChange: (layer, joins) => {
      dispatch(setJoinsForLayer(layer, joins));
    }
  };
}

function mapStateToProps({}, props) {
  return {
    joins: props.layer.getJoins().map(join => {
      return join.toDescriptor();
    }),
    layer: props.layer,
  };
}

const connectedJoinEditor = connect(mapStateToProps, mapDispatchToProps)(JoinEditor);
export { connectedJoinEditor as JoinEditor };
