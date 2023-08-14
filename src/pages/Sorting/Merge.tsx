import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { mergeSort, setMergeData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Merge() {
  const data = useSelector((data) => data.merge.values);

  const dispatch = useDispatch();

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setMergeData(numbersArray));
    dispatch(mergeSort());
  };

  const title = 'Merge Sort';
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
