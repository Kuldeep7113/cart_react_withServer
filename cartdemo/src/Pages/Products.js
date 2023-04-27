import React from 'react';
import '../index.css';
import OtherComponent from '../Components/Products';

function MyComponent() {
  const components = [];
  
  for (let i = 0; i < 10; i++) {
    components.push(<OtherComponent key={i} />);
  }
  
  return (
    <div >
      <div className='item' >
        {components}
        </div>
      
    </div>
  );
}

export default MyComponent;

