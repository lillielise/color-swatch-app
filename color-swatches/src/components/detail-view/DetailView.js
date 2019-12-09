import React, { useEffect, useState } from 'react';
import ColorSwatch from '../ColorSwatch';


function ListView() {

  let randomColor = [{color: 'blue', hex: '0000FF'}];
  return (
    <div>
      <p>this is the Details view </p>
      <ColorSwatch currentColors={randomColor}/>
    </div>
  );
}

export default ListView;