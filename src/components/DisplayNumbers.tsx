import React from 'react';
export default function DisplayNumbers({ data }) {
  return (
    <>
      <p className="center">{data.join(', ')}</p>
    </>
  );
}
