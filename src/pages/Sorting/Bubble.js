import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { bubbleSort, setBubbleData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';

export default function Bubble() {
  const data = useSelector((data) => data.values);
  const dispatch = useDispatch();

  const handleSetData = (values) => {
    const numbersArray = values.split(',').map((num) => parseInt(num));
    dispatch(setBubbleData(numbersArray));
    dispatch(bubbleSort());
  };

  return (
    <>
      <Input value={data} setData={handleSetData} />
      <DisplayNumbers data={data} />
      <BarGraph values={data} />
    </>
  );
}
