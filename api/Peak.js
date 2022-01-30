import AsyncStorage from '@react-native-async-storage/async-storage';

PEAK_URL = 'https://192.168.1.162/api/v1'

export default class PeakAPI {

  accessToken = null;

  async loadAccessToken() {
    this.accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken != null) {
      return true;
    }
    return false;
  }

  async request(path, method, data=null, ) {
    await this.loadAccessToken();
    const response = await fetch(PEAK_URL + path, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async login(email, password) {
    fetch(PEAK_URL + '/login/access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((response) => response.json())
      .then((response) => {
        await AsyncStorage.setItem('accessToken', response.accessToken);
        this.accessToken = response.accessToken;
      })
  }

  async userGet() {
    return this.request()
  }

}