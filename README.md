
# @graphprotocol/pino-sentry-simple

Forward [pino](https://github.com/pinojs/pino) logs to
[Sentry](https://sentry.io/). A fork of
[pino-sentry](https://github.com/aandrewww/pino-sentry) with a few
simplifications and error object handling via the `err` key.

## Index

- [@graphprotocol/pino-sentry-simple](#graphprotocolpino-sentry-simple)
  - [Index](#index)
  - [Install](#install)
  - [Usage](#usage)
  - [License](#license)

## Install

```bash
npm install @graphprotocol/pino-sentry-simple -g
```

## Usage

```typescript
import { createWriteStream } from '@graphprotocol/pino-sentry-simple'

const opts = { /* ... */ }
const stream = createWriteStream({
  dsn: process.env.SENTRY_DSN,
  tagKeys: ['requestId'],    // optional
  excludeKeys: ['username'], // optional
})
const logger = pino(opts, stream)
```

## License

[MIT License][LICENSE]