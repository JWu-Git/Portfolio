import React from 'react';

interface Props {
  data: number[];
}
export default function DisplayNumbers({ data }: Props) {
  return (
    <div className="mx-5 center">
      <h2 className="mt-5 center">Your Numbers: </h2>
      <p className="center mt-4">{data.join(', ')}</p>
    </div>
  );
}
