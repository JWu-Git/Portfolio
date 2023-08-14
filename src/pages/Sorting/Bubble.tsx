import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { bubbleSort, setBubbleData } from '../../store/slices/bubble';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Bubble() {
  const data = useAppSelector((data) => data.bubble.values);
  const [changed, setChanged] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const delayedBubbleSort = async () => {
      for (let i = 0; i < data.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        for (let j = 0; j < data.length - i - 1; j++) {
          dispatch(bubbleSort(j));
        }
      }
    };

    delayedBubbleSort();
  }, [changed]);

  const handleSetData = (values: number[]) => {
    dispatch(setBubbleData(values));
    setChanged((c) => c + 1);
  };
  const title = 'Bubble Sort';
  return (
    <>
      <Input setData={handleSetData} title={title} />
      <Row>
        <Col xs={5}>
          <DisplayNumbers data={data} />
        </Col>
        <Col>
          <BarGraph values={data} title={title} />
        </Col>
      </Row>
    </>
  );
}
