import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { bubbleSort, setBubbleData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Bubble() {
  const data = useSelector((data) => data.bubble.values);
  const [changed, setChanged] = useState(0);
  const dispatch = useDispatch();

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

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setBubbleData(numbersArray));
    setChanged((c) => c + 1);
  };
  const title = 'Bubble Sort';
  return (
    <>
      <Input value={data} setData={handleSetData} title={title} />
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
