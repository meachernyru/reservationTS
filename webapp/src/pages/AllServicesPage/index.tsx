import { trpc } from '../../lib/trpc'

export const AllServicesPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getMed.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data?.medservices.map((serviceItem) => (
        <div key={serviceItem.id}>
          <h2>{serviceItem.name}</h2>
          <p>{serviceItem.price}</p>
        </div>
      ))}
    </div>
  )
}
