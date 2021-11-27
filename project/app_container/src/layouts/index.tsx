import React, { FC, useMemo } from 'react'

import Styles from './index.less';
import { useLocation } from 'umi';
interface IProps {

}
const Layouts: FC<IProps> = (props) => {
  
  return <div className={Styles.container}>
    {props.children}
  </div>;
}

export default Layouts;
