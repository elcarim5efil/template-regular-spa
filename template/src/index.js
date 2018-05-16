import Regular from 'regularjs';
import ajax from '@/common/utils/ajax';
import NEKUI from 'nek-ui';
import App from './app';

import '@/style/index.less'

NEKUI.install(Regular);

ajax.install(Regular);

App.start();