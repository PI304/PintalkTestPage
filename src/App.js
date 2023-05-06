import Pintalk from 'pintalk-npm-package';
import React from 'react';
import styled from 'styled-components';

function App() {
  return (
      <div style={{backgroundColor: '#EBF3FB', height: '100%'}}>
        <div id="widget-space"></div>
        <WidgetBox>
          <Pintalk accessKey={'IfFBGulFS5Sl4mwj3wgIJA'} secretKey={'4248986161a492685b944f2764715215e85b4ab8b1359b558ad32d6756b6e6ac'} theme={'basic'}/>
        </WidgetBox>
      </div>
  );
}

const WidgetBox = styled.div`
  position: absolute; 
  right: 0px; 
  bottom: 0px; 
  width: 100px; 
  height: 100px;
    
`

export default App;
