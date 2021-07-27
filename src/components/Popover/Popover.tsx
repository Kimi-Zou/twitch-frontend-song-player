import { Popover as MuiPopover } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import popoverStyles from './PopoverStyles';

interface iPopover {
  anchorEl: HTMLElement | null;
  handlePopoverClose: () => void;
  open: boolean;
}

const Popover: React.FC<iPopover> = ({
  open,
  anchorEl,
  handlePopoverClose,
}) => {
  const classes = popoverStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <MuiPopover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{ paper: classes.paper }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: isSmallScreen ? 'center' : 100,
        horizontal: isSmallScreen ? 40 : 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <PlayArrowIcon className={classes.playIcon} />
    </MuiPopover>
  );
};

export default Popover;
