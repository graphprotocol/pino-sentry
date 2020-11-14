/* eslint-disable @typescript-eslint/no-var-requires */

const pinoLogger = require('pino')
const { createWriteStream } = require('../dist/index')

function main() {
  const SENTRY_DSN = "..."

  const options = {
    level: "info",
  }

  const stream = createWriteStream({ dsn: SENTRY_DSN, tagKeys: ['allocation'], excludeAttributeKeys: ['foo'] })

  const logger = pinoLogger(options, stream)

  logger.error({ foo: 'bar', allocation: '0x123' }, 'FAILURE without own stacktrace (and some extra data)')
  logger.error('FAILURE without own stacktrace (just a message)')
  logger.error({ err: new Error('Some error') }, 'FAILURE with stacktrace')
}

main()
