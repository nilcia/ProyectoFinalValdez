import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const SuculentId = () => {
  const { id } = useParams();
  return (
    <ItemDetailContainer id={id}/>
  );
};

export default SuculentId;