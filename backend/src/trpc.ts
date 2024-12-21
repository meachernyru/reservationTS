import { initTRPC } from '@trpc/server'

const medservices = [
  { id: '1', name: 'Service 1', price: 1.0 },
  { id: '2', name: 'Service 2', price: 5.0 },
  { id: '3', name: 'Service 3', price: 6.0 },
  { id: '4', name: 'Service 4', price: 8.0 },
]

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getServices: trpc.procedure.query(() => {
    return { medservices }
  }),
  getMed: trpc.procedure.query(() => {
    return { medservices }
  }),
})

export type TrpcRouter = typeof trpcRouter
