import React from 'react'
import styles from './form.module.css';

const Table = (props) => {
    console.log(props);
  return (
            <tr key={props.id} className={styles.table}>
                <td>{props.id}</td>
                <td>{props.Name}</td>
                <td>{props.Age}</td>
                <td>{props.Department}</td>
                <td>{props.Address}</td>
                <td>{props.Salary}</td>
                <td>{props.Married ?"Yes":"No"}</td>
            </tr>
    
  )
}
export default Table