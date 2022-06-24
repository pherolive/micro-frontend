import { loading } from '../store'
import * as appInfo from '../store'

export const subNavList = [
  {
    name: 'react15',// 唯一
    // 告诉要去哪个入口获取
    entry: '//localhost:9002/',
    loading,
    // 代表子应用在哪个容器显示
    container: '#micro-container',
    activeRule: '/react15',
    appInfo,
  },
  {
    name: 'react16',
    entry: '//localhost:9003/',
    loading,
    container: '#micro-container',
    activeRule: '/react16',
    appInfo,
  },
  {
    name: 'vue2',
    entry: '//localhost:9004/',
    loading,
    container: '#micro-container',
    activeRule: '/vue2',
    appInfo,
  },
  {
    name: 'vue3',
    entry: '//localhost:9005/',
    loading,
    container: '#micro-container',
    activeRule: '/vue3',
    appInfo,
  },
];

