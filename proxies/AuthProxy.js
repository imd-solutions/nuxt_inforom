import BaseProxy from './Proxy'

// const endpoint = APP_CONFIG.api_url || 'https://jsonplaceholder.typicode.com/todos/1'
const endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
const saveEndpoint = 'https://new-inform-staging.tmforum.org/graphql/'

class AuthProxy extends BaseProxy {
  constructor(parameters = {}) {
    super(endpoint, parameters)
  }

  save(data) {
    return this.submit('post', saveEndpoint, data)
  }
}

export default AuthProxy
