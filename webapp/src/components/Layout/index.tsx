import { Link, Outlet } from 'react-router-dom'
import { getAllServices } from '../../lib/routes'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>Логотип</b>
      </p>
      <ul>
        <li>
          <Link to={getAllServices()}>Все услуги</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
