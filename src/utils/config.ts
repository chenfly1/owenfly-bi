interface Config {
  host?: string;
  client_id?: string;
  client_secret?: string;
  grant_type?: string;
  scope?: string;
}

const configEnvMap: Record<string, Config> = {
  dev: {
    host: 'https://50data.bgy.com.cn/',
    // host: 'https://atopdev.aciga.com.cn',
    grant_type: 'password',
    client_id: 'f74420a9-9377-416f-9636-c62c05f1e020',
    scope: 'read,write,userinfo',
    client_secret: 'b73256427a174f488095a1520e17fe5d',
  },
  test: {
    host: 'https://50data.bgy.com.cn/',
    grant_type: 'password',
    client_id: 'f74420a9-9377-416f-9636-c62c05f1e020',
    scope: 'read,write,userinfo',
    client_secret: 'b73256427a174f488095a1520e17fe5d',
  },
  prod: {
    host: 'https://50data.bgy.com.cn/',
    grant_type: 'password',
    client_id: 'f74420a9-9377-416f-9636-c62c05f1e020',
    scope: 'read,write,userinfo',
    client_secret: 'b73256427a174f488095a1520e17fe5d',
  },
};

// if (REACT_APP_ENV === 'prod') {
//   config = {};
// } else if (REACT_APP_ENV === 'dev') {
//   config = {};
// }
const config = configEnvMap[REACT_APP_ENV];
export { config };
