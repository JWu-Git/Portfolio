import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { selectionSort, setSelectionData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function Selection() {
  const data = useSelector((data) => data.selection.values);

  const dispatch = useDispatch();

  useEffect(() => {
    const delayedSelectionSort = async () => {
      for (let i = 0; i < data.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        dispatch(selectionSort(i));
      }
    };
    delayedSelectionSort();
  }, [data]);

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setSelectionData(numbersArray));
  };

  return (
    <>
      <Input value={data} setData={handleSetData} />
      <Row>
        <Col xs={5}>
          <DisplayNumbers data={data} />
        </Col>
        <Col>
          <BarGraph values={data} title="Selection Sort" />
        </Col>
      </Row>
    </>
  );
}
