import assert from 'node:assert/strict'
import test from 'node:test'
import { createEventBus } from './eventBus.js'

test('delivers events to listeners of that type only', () => {
  const bus = createEventBus()
  const received = []

  bus.on('a', (payload) => received.push(['a', payload]))
  bus.on('b', (payload) => received.push(['b', payload]))
  bus.emit('a', 1)

  assert.deepEqual(received, [['a', 1]])
})

test('unsubscribes', () => {
  const bus = createEventBus()
  let calls = 0

  const off = bus.on('a', () => calls++)
  bus.emit('a')
  off()
  bus.emit('a')

  assert.equal(calls, 1)
})

test('emitting without listeners does nothing', () => {
  assert.doesNotThrow(() => createEventBus().emit('nobody'))
})
