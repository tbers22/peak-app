import AsyncStorage from '@react-native-async-storage/async-storage';

PEAK_URL = 'http://192.168.1.162/api/v1'

export default class PeakAPI {

  accessToken = null;

  async loadAccessToken() {
    try {
      this.accessToken = await AsyncStorage.getItem('accessToken');
    } catch (e) {
      return false;
    }
    if (this.accessToken != null) {
      return true;
    }
    return false;
  }

  async request(path, method, data=null, ) {
    await this.loadAccessToken();
    data = {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`
      },
    }
    if (method == 'POST') {
      data = { ...data, body: JSON.stringify(data) }
    }
    const response = await fetch(PEAK_URL + path, data);
    return response.json();
  }

  async login(email, password) {
    fetch(PEAK_URL + '/login/access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${email}&password=${password}`
    }).then((response) => response.json())
      .then((response) => {
        AsyncStorage.setItem('accessToken', response.access_token);
        this.accessToken = response.access_token;
      })
  }

  async userGet() {
    return this.request('/users/me', 'GET')
  }

  async clipsGet(startTimestamp, endTimestamp) {
    return this.request(`/clips/?start_timestamp=${startTimestamp}&end_timestamp=${endTimestamp}`, 'GET')
  }

}