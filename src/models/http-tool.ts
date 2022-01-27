import { HttpClient } from 'aurelia-fetch-client';
import AuthorizationTypes from '../enums/authorization-types';

/** Http Client helper functions */
export default class HttpTool {
  /**
   * Add authorization to HTTP Client. If not HTTP client given, it creates a new one.
   * @param baseApiUrl: URL to access
   * @param type: type of authorization
   * @param token: token to add to authorization header
   * @param httpClient: http client 
   */
  static addAuthorizationHeader(baseApiUrl: string, type: AuthorizationTypes, token: string, httpClient: HttpClient): HttpClient {
    if (!httpClient) {
      httpClient = new HttpClient();
    } 
    httpClient.configure(config => {
      config
        .withBaseUrl(baseApiUrl)
    });
    switch (type) {
      case AuthorizationTypes.None:
        break;
      case AuthorizationTypes.NoAuth:
        break;
      case AuthorizationTypes.BearerToken:
        if (!token) {
          throw new TypeError("Authorization type " + type + " requres a token.")
        }
        httpClient.configure(config => {
          config.withDefaults({
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
        });
        break;
      case AuthorizationTypes.NTLM:
        httpClient.configure(config => {
          config
            .useStandardConfiguration()
            .withDefaults({
            mode: "cors",
            credentials: 'include',
          });
        });
        break;
    }
    return httpClient;
  }

  /** Get base path of current location */
  static getBasePath(): string {
    let p: string = window.location.pathname; //match '/' if iisexpress in local
    console.log(p);
    console.log('location.pathname: ' + window.location.pathname);
    console.table(window.location);
    console.log(window.location.pathname.substr(0));
    console.log(window.location.pathname.substr(1));
    if (p.length > 1) {
      //in IIS virtual directory hosting
      p = window.location.pathname.substr(1).match(/[A-z_0-1]*/i)[0];
      console.log(p);
    }
    //p = window.location.pathname.substr(1).match(/[A-z_0-1]*/i)[0];
    //console.log('path' + window.location.pathname.substr(1).match(/[A-z_0-1]*/i)[0]);
    return p;

    //if (!location.pathname.startsWith('signin') && !location.pathname.startsWith('signout') && !location.pathname.startsWith('sign-out') && !location.pathname.match('checksession')) {
    //  self.basePath = location.pathname;
    //  if (env.environment == 'dev') {
    //    return '/';
    //  } else {
    //    return '/' + location.pathname.substr(1).match(/[A-z_0-1]*/i)[0] + '/';
    //  }
    //} else {
    //  return env.virtualDirectory;
    //}
  }

  ///Handles API error from a promise
  ///error: error promise
  ///progress module
  static handlePromiseError(error?: any, displayProperty?: string, progress?: any,alertUser?: boolean): string {
    if (!error) {
      if (progress) {
        console.table(progress.getEvents());
      }
      return '';
    }
    if (error.status == 500) {
      if (error.statusText) {
        if (progress) {
          progress.setError(error.statusText);
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert(error.statusText);
          } 
        }
        return error.statusText;
      } else {
        if (progress) {
          progress.setError();
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert('Error');
          }
        }
        return 'Error';
      }
    } else if (error.status == 401) {
      if (error.statusText) {
        if (progress) {
          progress.setError(error.statusText);
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert(error.statusText);
          }
        }
        return error.statusText;
      } else {
        if (progress) {
          progress.setError();
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert('Error');
          }
        }
        return 'Error';
      }
    }
    else if (error.status == 400) {
      var display = error.statusText;
      error.json().then(data => {
        console.log(data);
        if (typeof data === 'string') {
          if (progress) {
            progress.setError(data);
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert(data);
            }
          }
          return data;
        } else if (data instanceof String) {
          if (progress) {
            progress.setError(data.toString());
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert(data.toString());
            }
          }
          return data.toString();
        } else {
          var displayValue = HttpTool.getPropertyValueFromObject(data, displayProperty);
          if (displayValue) {
            if (progress) {
              progress.setError(displayValue);
              console.table(progress.getEvents());
            } else {
              if (alertUser) {
                alert(displayValue);
              }
            }
            return displayValue;
          } else {
            if (progress) {
              progress.setError();
              console.table(progress.getEvents());
            } else {
              if (alertUser) {
                alert('Error');
              }
            }
            return 'Error';
          }
        }
      });
    }
    else if (error.status == 200) {
      var display = error.statusText;
      error.json().then(data => {
        console.log(data);
        if (typeof data === 'string') {
          if (progress) {
            progress.setError(data);
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert(data);
            }
          }
          return data;
        } else if (data instanceof String) {
          if (progress) {
            progress.setError(data.toString());
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert(data.toString());
            }
          }
          return data.toString();
        } else {
          var displayValue = HttpTool.getPropertyValueFromObject(data, displayProperty);
          if (displayValue) {
            if (progress) {
              progress.setError(displayValue);
              console.table(progress.getEvents());
            } else {
              if (alertUser) {
                alert(displayValue);
              }
            }
            return displayValue;
          } else {
            if (progress) {
              progress.setError();
              console.table(progress.getEvents());
            } else {
              if (alertUser) {
                alert('Error');
              }
            }
            return 'Error';
          }
        }
      });
    } else {
      if (typeof error === 'string') {
        if (progress) {
          progress.setError(error);
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert(error);
          }
        }
        return error;
      } else if (error instanceof String) {
        if (progress) {
          progress.setError(error.toString());
          console.table(progress.getEvents());
        } else {
          if (alertUser) {
            alert(error.toString());
          }
        }
        return error.toString();
      } else {
        var displayValue = HttpTool.getPropertyValueFromObject(error, displayProperty);
        if (displayValue) {
          if (progress) {
            progress.setError(displayValue);
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert(displayValue);
            }
          }
          return displayValue;
        } else {
          if (progress) {
            progress.setError();
            console.table(progress.getEvents());
          } else {
            if (alertUser) {
              alert('Error');
            }
          }
          return 'Error';
        }
      }
    }
  }

  static getPropertyValueFromObject(obj, prop) {
    if (typeof obj === 'undefined') {
      return false;
    }
    var _index = prop.indexOf('.')
    if (_index > -1) {
      return HttpTool.getPropertyValueFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    return obj[prop];
  }
}
