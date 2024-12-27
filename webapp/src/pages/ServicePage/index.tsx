import { useParams } from 'react-router-dom'
import { trpc } from '../../lib/trpc'

export const ServicePage = () => {
  const { servId } = useParams() as { servId: string }

  const { data, error, isLoading, isFetching, isError } = trpc.getService.useQuery({
    id: servId,
  })

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data.service) {
    return <span>Не найдена услуга !</span>
  }

  return (
    <div>
      <h1> {data.service.id} </h1>
      <p>Цена {data.service.price} </p>
      <div>
        <p>{data.service.name} </p>
      </div>
    </div>
  )
}
