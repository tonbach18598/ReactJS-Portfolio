import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/themes';

export default makeStyles(
  (theme: AppTheme) => ({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    typography: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    primary: {
      color: theme.colors.primary,
    },
  }),
  { index: 1 }
);
