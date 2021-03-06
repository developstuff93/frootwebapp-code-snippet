import React from 'react';
import { TableActionButtons } from 'components';
import { Checkbox } from 'antd';

export default (handleDeleteRow, handleEdit) => [{
  title: 'From',
  dataIndex: 'from',
  render: text => text
}, {
  title: 'To',
  dataIndex: 'to',
  render: text => text
}, {
  title: 'Delivery Limit',
  dataIndex: 'isDeliveryLimited',
  render: checked => (
    <Checkbox checked={ checked } disabled />
  )
}, {
  title: 'Number Of Deliveries',
  dataIndex: 'deliveries',
  render: text => text
}, {
  title: 'Actions',
  dataIndex: 'total',
  render: (text, record) => (
    <TableActionButtons
      record={ record }
      deleteButtonVisible
      handleEdit={ handleEdit }
      handleDeactivate={ handleDeleteRow }
    />
  )
}];
