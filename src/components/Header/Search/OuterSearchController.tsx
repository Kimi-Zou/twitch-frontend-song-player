import { useGlobalContext } from '../../../contexts/GlobalContext';
import InnerSearchController from './InnerSearchController';

const OuterSearchController = () => {
  const { setSongs } = useGlobalContext();
  return <InnerSearchController setSongs={setSongs} />;
};

export default OuterSearchController;
