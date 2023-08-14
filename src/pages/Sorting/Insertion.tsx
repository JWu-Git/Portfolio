import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { insertionSort, setInsertionData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Insertion() {
  const data = useSelector((data) => data.insertion.values);

  const dispatch = useDispatch();

  useEffect(() => {
    const delayedInsertionSort = async () => {
      for (let i = 1; i < data.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        dispatch(insertionSort(i));
      }
    };
    delayedInsertionSort();
  }, [data]);

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setInsertionData(numbersArray));
  };

  const title = 'Insertion Sort';
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
