import Axios from 'axios';

Axios.defaults.baseURL = process.env.VUE_APP_API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';
Axios.defaults.headers['content-type'] = 'application/json';
//Axios.defaults.headers.common.AccessControlAllowOrigin = '*';

const enabledLoader = 1,
    disabledLoader = -1

class BaseProxy {
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  setParameters(parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key];
    });
    return this;
  }

  setParameter(parameter, value) {
    this.parameters[parameter] = value;
    return this;
  }

  removeParameters(parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter];
    });

    return this;
  }

  removeParameter(parameter) {
    delete this.parameters[parameter];

    return this;
  }

  submit(requestType, url, data = null, isLoaded) {
    return new Promise((resolve, reject) => {
      Axios[requestType](url + this.getParameterString(), data)
          .then((response) => {
            resolve(response.data);
          })
          .catch(({response}) => {
            if (response) {
              reject(response.data);
            } else {
              reject();
            }
          }).finally(() => {
      })
    });
  }

  all() {
    return this.submit('get', `${this.endpoint}`);
  }

  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  create(item) {
    return this.submit('post', `${this.endpoint}`, item);
  }

  update(id, item) {
    return this.submit('put', `/${this.endpoint}/${id}`, item);
  }

  destroy(id) {
    return this.submit('delete', `/${this.endpoint}/${id}`);
  }

  getParameterString() {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys
        .filter((key) => !!this.parameters[key])
        .map((key) => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }
}

export default BaseProxy;
