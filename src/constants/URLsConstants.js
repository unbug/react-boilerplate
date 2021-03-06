import Config from './Config';
import LocalStorage from '../utils/LocalStorage';

const CACHE_ID_KEY = `${Config.appName}_cache_id`;
let cacheId = LocalStorage.getItem(CACHE_ID_KEY);
if (!cacheId) {
  updateCacheId();
}

function updateCacheId() {
  cacheId = Date.now();
  LocalStorage.setItem(CACHE_ID_KEY, cacheId);
}

// other APIs
const other = {
}

export default {
  updateCacheId,
  other,
};
