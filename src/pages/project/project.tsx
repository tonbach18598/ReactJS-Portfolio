import { Box, Grid } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { Layout, ProjectItem, Typography } from 'src/components';
import { i18nKey } from 'src/locales/i18n';
import { ProjectType } from 'src/models/project';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import useThemeStyles from 'src/themes/styles';
import useStyles from './styles';

const Project = () => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { t } = useTranslation();

  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  return (
    <Layout>
      <Grid className={clsx(themeClasses.container)} container>
        <Box mb={2}>
          <Typography color='primary' variant='h4'>
            {t(i18nKey.company)}
          </Typography>
        </Box>
        <Grid className={clsx(themeClasses.container)} container spacing={4}>
          {_.sortBy(
            _.filter(_.filter(user?.project, { visible: true }), {
              type: ProjectType.COMPANY,
            }),
            'index'
          )
            .reverse()
            .map((item) => (
              <Grid key={`${item.name} ${item.index}`} item>
                <ProjectItem item={item} />
              </Grid>
            ))}
        </Grid>
        <Box mt={6} mb={2}>
          <Typography color='primary' variant='h4'>
            {t(i18nKey.personal)}
          </Typography>
        </Box>
        <Grid className={clsx(themeClasses.container)} container spacing={4}>
          {_.sortBy(
            _.filter(_.filter(user?.project, { visible: true }), {
              type: ProjectType.PERSONAL,
            }),
            'index'
          )
            .reverse()
            .map((item) => (
              <Grid key={`${item.name} ${item.index}`} item>
                <ProjectItem item={item} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Project;
