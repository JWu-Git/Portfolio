import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { bubbleSortThunk } from '../../store/thunks/bubblesort';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

interface Props {
  title: string;
}
export default function Bubble({ title }: Props) {
  const { values, first_index, second_index } = useAppSelector(
    (data) => data.bubble
  );

  const dispatch = useAppDispatch();

  const handleSetData = (values: number[]) => {
    dispatch(bubbleSortThunk(values));
  };
  return (
    <>
      <Input setData={handleSetData} title={title} />
      <Row>
        <Col xs={5}>
          <DisplayNumbers data={values} />
        </Col>
        <Col>
          <BarGraph
            values={values}
            title={title}
            first_index={first_index}
            second_index={second_index}
          />
        </Col>
      </Row>
    </>
  );
}
