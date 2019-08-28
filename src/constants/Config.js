import { searchParams } from '../utils/Param';
const searchPars = searchParams();

const Config = {
  appName: 'test',
  debug: searchPars['debug']
};

export default Config;
