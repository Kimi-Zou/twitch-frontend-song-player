import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchStyles';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLDivElement>, query: string) => void;
}

const Search: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  return (
    <Paper
      className={classes.search}
      component="form"
      onSubmit={(event) => onSubmit(event, query)}
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
