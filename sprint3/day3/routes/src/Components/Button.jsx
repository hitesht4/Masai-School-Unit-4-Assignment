import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.css';


const Click = (props) => {
  return (
    <div>
        <Button className={styles.button} variant="primary">{props.title}</Button>{' '}
    </div>
  )
}

export default Click;