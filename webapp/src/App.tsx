export const App = () => {
  const medservices = [
    { id: '1', name: 'Service 1', price: 1.0 },
    { id: '2', name: 'Service 2', price: 5.0 },
    { id: '3', name: 'Service 3', price: 6.0 },
    { id: '4', name: 'Service 4', price: 8.0 },
  ]
  return (
    <div>
      <h1 className="my-class">Медицинские услуги</h1>
      {medservices.map((item) => {
        return (
          <h2 key={item.id}>
            {item.name} цена: {item.price} руб.
          </h2>
        )
      })}
    </div>
  )
}
