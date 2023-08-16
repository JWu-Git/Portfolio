import React from 'react';
import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { bubbleSortThunk } from '../../store/thunks/sort';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

interface Props {
  title: string;
}
export default function Bubble({ title }: Props) {
  const { numbers, first_compare_index, second_compare_index, is_sorting } =
    useAppSelector((data) => data.bubble);

  const dispatch = useAppDispatch();

  const handleSetData = (values: number[]) => {
    dispatch(bubbleSortThunk(values));
  };
  return (
    <>
      <Input setData={handleSetData} title={title} is_sorting={is_sorting} />
      <Row>
        <Col xs={5}>
          <DisplayNumbers data={numbers} />
        </Col>
        <Col>
          <BarGraph
            values={numbers}
            title={title}
            first_compare_index={first_compare_index}
            second_compare_index={second_compare_index}
          />
        </Col>
      </Row>
    </>
  );
}
