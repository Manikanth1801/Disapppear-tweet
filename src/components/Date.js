import React,{useState} from 'react';
import moment from 'moment';
import { DatePicker, Space } from 'antd';

// const { RangePicker } = DatePicker;



const Date = (props) =>
{
    function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today
    return current && current < moment().startOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range().splice(),
      disabledMinutes: () => range(),
      disabledSeconds: () => [],
    };
  }
  
    return (
    <React.Fragment>
      <Space direction="vertical" size={12}>
          <DatePicker
            type="date"
            size="small"
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            onChange={(e) => {
              if (e === null)
              { props.onChange("select Date") }
              else {
                props.onChange(e._d)
              }
            }}
          />
        </Space>
    </React.Fragment>
  )
}
export default Date;