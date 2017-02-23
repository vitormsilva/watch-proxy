import 'proxy-observe';

//     proxy-observe v0.0.18
//     Copyright (c) 2015, 2016 Simon Y. Blackwell, AnyWhichWay
//     MIT License - http://opensource.org/licenses/mit-license.php
class WatchProxy {

  /**
   * Creates an instance of WatchProxy.
   *
   *
   * @memberOf WatchProxy
   */
  constructor() {
    this._watching = {};
    this._observers = [];
  }

  /**
   *
   *
   * @param {String} key - name of event you will watching
   * @param {Object} object - object which will be observed
   * @param {boolean} [deep=false] - option if you want deep observe the object;
   * @returns {Proxy<Object>} object based on the proxy-observe module;
   *
   * @memberOf WatchProxy
   */
  watch(key, object, deep = false) {
    if (deep) {
      this._watching[key] = Object.deepObserve(object, (changes) => {
        changes.every((change) => {
          this._fireEvent(key, change);
        });
      });
    } else {
      this._watching[key] = Object.observe(object, (changes) => {
        changes.every((change) => {
          this._fireEvent(key, change);
        });
      });
    }
    return this._watching[key];
  }

  /**
   *
   *
   * @param {String} key - name of the key you watching;
   * @param {Function} callback - callback where the proxy-observe changes will be dispatched
   *
   * @memberOf WatchProxy
   */
  observe(key, callback) {
    this._observers.push({key: key, callback: callback});
  }

  _fireEvent(key, change) {

    this._observers.filter((observe) => {
      return observe.key === key;
    }).forEach((observe) => {
      observe.callback(change);
    });

  }

}

export default WatchProxy;
