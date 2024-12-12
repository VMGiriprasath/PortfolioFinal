
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio1/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7659, hash: 'f04cfb8790a3cad936bd9b4314821697b984219a89d161ef7d7c6d9def3eb2d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7986, hash: 'aa16122e48ae99894554895878b3926dfac8134cafc4f60f152ff866d5dbab77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
