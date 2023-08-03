import BarGraph from '../../components/BarGraph';
import Input from '../../components/Input';
import DisplayNumbers from '../../components/DisplayNumbers';
import { bubbleSort, setBubbleData } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Bubble() {
  const data = useSelector((data) => data.values);

  const dispatch = useDispatch();

  useEffect(() => {
    const delayedBubbleSort = async () => {
      for (let i = data.length - 1; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
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
