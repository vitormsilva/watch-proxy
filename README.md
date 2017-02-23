# Watch Proxy

## Status

## Overview

Based on the [proxy-observe](https://github.com/anywhichway/proxy-observe) module this wrapper was created
to handle events to each proxy-observe;

The main point is create a watch event to an object and observe object changes;

## Installation

```shell
npm install watch-proxy
```

```javascript
let watchProxy = new WatchProxy();
let objectProxy = watchProxy.watch('object:proxy', {});

watchProxy.observe('object:proxy', (changes) => {
    console.log('changes:', changes);
})

objectProxy.property = {}

```

## Next steps:

 - remove observes

## Feedback

Please open issues to improve this module;