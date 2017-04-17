import React from 'react';
import PropTypes from 'prop-types';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';
import { connectSocket } from 'mcs-lite-connect';

function MCSSwitch({ datachannelId, values, send, onChange }) {
  return (
    <DataChannelAdapter
      dataChannelProps={{
        id: datachannelId,
        type: 'SWITCH_CONTROL',
        values: values,
        format: {},
      }}
      eventHandler={({ id, values }) => {
        const payload = JSON.stringify({ datachannelId: id, values });
        send(payload);
      }}
    />
  );
}

MCSSwitch.propTypes = {
  // 1 .Config
  datachannelId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

  // 2. React State - datapoint
  values: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    period: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,

  // 3. From WebSocket HOC
  send: PropTypes.func.isRequired,
};

// API: https://github.com/MCS-Lite/mcs-lite/tree/master/packages/mcs-lite-connect
export default connectSocket(
  props => props.url,
  props => datapoint => props.onChange(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);
