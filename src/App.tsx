import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}
// này chính là mình gọi là custom hook
export default App
