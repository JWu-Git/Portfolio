import React from 'react';

interface Props {
  data: number[];
}
export default function DisplayNumbers({ data }: Props) {
  return (
    <>
      <p className="center">{data.join(', ')}</p>
    </>
  );
}
