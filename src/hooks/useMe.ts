import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { SET_USER } from 'src/redux/user/userAction';
import { RoutePath } from 'src/routes/routePath';
import { service } from 'src/services/service';

export const useMe = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    const response = await service.getMe();
    try {
      dispatch({
        type: SET_USER,
        payload: response,
      });
    } catch (error) {
      history.push(RoutePath.ERROR);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [dispatch, history]);

  return {
    getData,
  };
};
