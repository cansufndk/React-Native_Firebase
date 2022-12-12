import moment from 'moment';
//import * as endpoints from './endpoints';
//import { post } from './service';

import {SLEEP} from '~/utils/core/sleep';
import {setItem, getItem} from '~/utils/core/storage/mmkv';
//import store from '~/store';

class Token {
  expiration;

  setData(data) {
    setItem('userId', data.userId);
    setItem('token', data.token);
    //setItem('refreshToken', data.refreshToken);
    this.expiration = moment(data.expiration);
  }

  remainingTimeInMs() {
    return moment().diff(this.expiration, 'millisecond').toFixed(0);
  }

  async startTimer(forceRefreshToken) {
    setItem('tokenTimerStatus', true);

    while ((getItem('tokenTimerStatus'), 'boolean')) {
      const rt = this.remainingTimeInMs();

      if (forceRefreshToken) {
        forceRefreshToken = false;
      } else {
        await SLEEP(-rt - 10 * 1000);
      }

      const res = await this.refreshNow();

      if (res) {
        //refresh token success
      } else {
        //resfress token fail
        //store.dispatch({ type: 'REFRESH_TOKEN_FAIL' });
      }
    }
  }

  stopTimer() {
    setItem('tokenTimerStatus', false);
  }

  refreshNow() {
    return new Promise(resolve => {});
  }

  getHeader(type) {
    const token = getItem('token');

    switch (type) {
      default:
        return {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        };
    }
  }
}
global.token = new Token();
