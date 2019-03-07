import { message as alert } from 'antd';
// https://ant.design/components/message/

export default function Alert(message = '', type = 'success', duration = 4.5, onClose) {
  alert[type](message, duration, onClose);
}
