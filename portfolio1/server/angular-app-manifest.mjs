
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VMGiriprasath.github.io/Portfolio1/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7690, hash: 'be67f72edc6b45148d531f08296f0df6a28f937dff480836318d78dcebfa2feb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8017, hash: 'a5aa8d4abb754f2bf2931be85f69b290781af616b83bdb48056745052d186437', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
