
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio1/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7659, hash: '03690db560ab5ad11356c540775355339b0003446942555d60746022e2aa8305', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7986, hash: '4b2966ed4661fc6ea3f285688434e9d2927837ceb6ca930fe323b86050da82c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
