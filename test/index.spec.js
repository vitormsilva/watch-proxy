// Import chai.
import chai from 'chai';

// Tell chai that we'll be using the "expect" style assertions.
chai.expect();

// Import the Rectangle class.
import WatchProxy from '../index.js';

let expect = chai.expect;

describe('WatchProxy', function() {
  let watchProxy;
  let watchProxy2;
  let deepObj;
  let obj;
  let obj2;

  before(() => {
    watchProxy = new WatchProxy();
    deepObj = watchProxy.watch('changes:deepObj', {}, true);
    obj = watchProxy.watch('changes:obj', {});
  });

  it('should watch the object changes ', function(done) {

    watchProxy.observe('changes:obj', (change) => {
      expect(change).to.deep.eq({
        name: 'name',
        type: 'add',
        object: {
          name: 'My Name'
        }
      });
      done();
    });

    obj.name = 'My Name';
  });

  it('should watch the deep object changes', function(done) {

    watchProxy.observe('changes:deepObj', (change) => {
      expect(change).to.deep.eq({
        keypath: 'user',
        name: 'user',
        newValue: 'name',
        type: 'add',
        oldValue: undefined,
        object: {
          user: 'name'
        }
      });

      done();
    });

    deepObj.user = 'name';
  });

  it('should have new instance of WatchProxy', function(done) {

    watchProxy2 = new WatchProxy();
    obj2 = watchProxy2.watch('change:proxy', {}, false);

    watchProxy2.observe('change:proxy', (change) => {
      expect(change).to.deep.eq({
        name: '1',
        type: 'add',
        object: {
          1: [1, 2]
        }
      });

      done();

    });

    obj2['1'] = [1, 2];

  });

  it('should remove the \change:proxy\ observer', function() {
    watchProxy2.unobserve('change:proxy');
    expect(watchProxy2.observers).to.be.empty;
  })

  it('should remove all observers', function() {
    watchProxy.unobserve('changes:deepObj');
    watchProxy.unobserve('changes:obj');
    expect(watchProxy.observers).to.be.empty;
  });

});
