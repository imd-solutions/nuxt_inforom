import BaseProxy from './Proxy'

const endpoint = 'https://new-inform-staging.tmforum.org/graphql/'
const saveEndpoint = 'https://new-inform-staging.tmforum.org/graphql/'
const marketoEndpoint = 'https://new-inform-staging.tmforum.org/api/marketo/'

class ContentProxy extends BaseProxy {
  constructor(parameters = {}) {
    super(endpoint, parameters)
  }

  fetchContentData(data, isLoaded) {
    return this.submit('post', saveEndpoint, data, isLoaded)
  }

  save(data) {
    return this.submit('post', saveEndpoint, data)
  }

  marketo(data) {
    return this.submit('post', marketoEndpoint, data)
  }
}

export default ContentProxy
