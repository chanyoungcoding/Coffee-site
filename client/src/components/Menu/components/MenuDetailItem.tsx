import React from 'react';

import { DetailItem } from '../../../models/coffee';

const MenuDetailItem:React.FC<DetailItem> = React.memo(({name, detail, number}) => {
  return (
  <div className={number !== 1 ? `menuintro__detail` : `menuintro__detail__${number}`}>

    <h3>{name}</h3>

    <h4>{detail !== null ? detail : 'Loading...'}</h4>
    
  </div>
  )
});

export default MenuDetailItem;