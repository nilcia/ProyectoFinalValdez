import { useParams } from 'react-router-dom';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer'

const Suculents = () => {
  const { id } = useParams();
  return (
    <CategoryContainer id={id}/>
  );
};

export default Suculents;