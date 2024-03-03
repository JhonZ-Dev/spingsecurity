// environment.ts
export const environment = {
    production: false,
    athorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id:'client',
    redirect_uri:'http://localhost:4200/authorize',
    scope:'openid profile',
    response_type:'code',
    response_mode:'form_post',
    code_challenge_method:'S256',
    code_challenge:'6Ivr0Y-0ECrjI5IuLtHUSjOdr2tIOes2_YcOtG3EmTE',
    code_verifier:'3dSOhJqMqMcenTVrSaGJQqNwj1vS5pvzi0yINTJRU19'

  };
  