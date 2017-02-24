# Watch Proxy

## Status
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/81429e46c48f4b9aaa1d2b3a0a8584d5)](https://www.codacy.com/app/vitormsilva/watch-proxy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vitormsilva/watch-proxy&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/vitormsilva/watch-proxy.svg?branch=master)](https://travis-ci.org/vitormsilva/watch-proxy)

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
