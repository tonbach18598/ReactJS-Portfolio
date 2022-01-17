import { Backdrop, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootState';
import { SpinnerState } from 'src/redux/spinner/spinnerState';
import { Props } from './props';
import useStyles from './styles';

const Spinner = (props: Props) => {
  const classes = useStyles();
  const spinner = useSelector<RootState, SpinnerState>(
    (state) => state.spinnerReducer
  );
  if (!props.visible && !spinner.visible) {
    return null;
  }

  return (
    <Backdrop classes={{ root: classes.backdrop }} open={true}>
      <CircularProgress classes={{ root: classes.spinner }} />
    </Backdrop>
  );
};

export default Spinner;
