import React, { useEffect, useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import OrderService from "services/transcript.service";

function Certificate({ match }) {
  const [order, setOrder] = useState('');

  useEffect(() => {
    async function fetchData() {
      const order = await OrderService.fetchTranscriptById(match.params.id-1);
  
      setOrder(JSON.stringify(order));
    }

    fetchData();
  }, [match.params.id]);
  
  return (
    <div className='order-result'> 
      <h1>Your  Certificate</h1>
      <hr />
      <Editor
        value={order}
        highlight={order => highlight(order, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
}

export default Certificate;
