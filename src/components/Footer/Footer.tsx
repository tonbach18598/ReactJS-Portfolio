import { Typography } from '@components';
import { Localization } from '@locales/i18n';
import { Grid } from '@material-ui/core';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import { useTranslation } from 'react-i18next';
import Props from './props';
import useStyles from './styles';

const Footer = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  return (
    <Grid className={classes.container}>
      <Typography variant='subtitle2'>
        {t(Localization.footer, {
          time: new Date().getFullYear(),
          username: user?.profile?.name,
        })}
      </Typography>
    </Grid>
  );
};

export default Footer;
