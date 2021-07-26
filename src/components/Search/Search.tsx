import { useState } from 'react';
import { InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchStyles';
import { useGlobalContext } from '../../contexts/GlobalContext';
import onSubmit from './SearchLogic';

const Search: React.FC = () => {
  const classes = useStyles();
  const { token } = useGlobalContext();
  const [query, setQuery] = useState('');

  return (
    <Paper
      className={classes.search}
      component="form"
      onSubmit={(e) => onSubmit(e, token, query)}
    >
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        autoFocus={true}
        fullWidth={true}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Paper>
  );
};

export default Search;
