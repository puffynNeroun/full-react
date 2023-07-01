import React from 'react';
import styles from './myInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={styles.input} {...props}/>
    );
});

export default MyInput;