import React from 'react';
export default function DisplayNumbers({ data }) {
  return (
    <>
      <h2 className="center">{data.join(', ')}</h2>
    </>
  );
}
