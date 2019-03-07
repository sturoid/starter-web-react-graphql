import { notification as notify } from 'antd';
// https://ant.design/components/notification/

export default function notification(
  title = 'Notification',
  message = '',
  duration = 4.5,
  type = 'success',
  ...rest
) {
  notify[type]({ message: title, description: message, duration, ...rest });
}
