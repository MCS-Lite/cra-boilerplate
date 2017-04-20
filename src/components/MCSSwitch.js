import React from 'react';
import DataChannelAdapter from 'mcs-lite-ui/lib/DataChannelAdapter';
import { connectSocket } from 'mcs-lite-connect';

const DATACHANNEL_TYPE = 'SWITCH_CONTROL';

function MCSSwitch({ datachannelId, values, send, onChange }) {
  return (
    <DataChannelAdapter
      dataChannelProps={{
        id: datachannelId,
        type: DATACHANNEL_TYPE,
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

export default connectSocket(
  props => props.url,
  props => datapoint => props.onChange(datapoint),
  ({ send }) => ({ send }),
)(MCSSwitch);
