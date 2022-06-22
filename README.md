# Twoflower

Twoflower helps eliminate boilerplate code and provides re-usable and simple AWS SDK mocking for locally testing lambda code

```js
// example.test.ts

import {AWSMock} from 'twoflower';
const awsMock = new AWSMock(['S3', 'DynamoDB']); // simply pass in the services you would like to use as a string array

import {handler} from './lambda-source-code.ts';

awsMock.initMocks();

describe('Example Test Suite', () => {
  test('example test', async () => {
    const lambdaResponse: { body: string } = await handler(event, context, callback); // Pass in whatever event, context, and callback parameters you may need to invoke your lambda
    
    expect(lambdaResponse.body).toContain('dynamoDB information and S3 object information') // your expect clause will be dependent on your lambda's business logic
  }
});
```

## What sets Twoflower apart?

<ul>
  <li>No need to refactor your lambda code, our mocks work when following AWS best practices!</li>
  <li>Simple to use, open for extension</li>
  <li>Lightweight distribution means quick testing</li>
</ul>
