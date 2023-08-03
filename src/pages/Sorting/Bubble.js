import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { bubbleSort, setBubbleData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Bubble() {
  const data = useSelector((data) => data.bubble.values);

  const dispatch = useDispatch();

  useEffect(() => {
    const delayedBubbleSort = async () => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          dispatch(bubbleSort(j));
        }
      }
    };

    delayedBubbleSort();
  }, [data]);

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setBubbleData(numbersArray));
  };

  return (
    <>
      <Input value={data} setData={handleSetData} />
      <Row>
        <Col xs={5}>
          <DisplayNumbers data={data} />
        </Col>
        <Col>
          <BarGraph values={data} title="Bubble Sort" />
        </Col>
      </Row>
    </>
  );
}
