import { useGlobalContext } from '../../../contexts/GlobalContext';
import Songs from './Songs';

const SongsController = () => {
  const { songs } = useGlobalContext();
  return <Songs songs={songs} />;
};

export default SongsController;
