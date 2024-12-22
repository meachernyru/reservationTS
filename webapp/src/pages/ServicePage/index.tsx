import { useParams } from 'react-router-dom'

export const ServicePage = () => {
  const { servId } = useParams() as { servId: string }

  return (
    <div>
      <h1> Is {servId}</h1>
      <p>Description of idea {servId}</p>
      <div>
        <p>Text paragrph 1 of idea 1...</p>
        <p>Text paragrph 2 of idea 1...</p>
        <p>Text paragrph 3 of idea 1...</p>
      </div>
    </div>
  )
}
