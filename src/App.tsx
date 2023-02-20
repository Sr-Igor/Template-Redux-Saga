import {useSelector, useDispatch} from './hook/useRedux'
import { authUserRequest } from './store/modules/auth/actions'
import { useEffect } from 'react'

function App() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const authUser = () => {
    dispatch(
      authUserRequest({
        email: 'mock@email.com',
        password: '123456'
      })
    )
  }

  useEffect(()=>{
    console.log(auth)
  }, [auth])

  return (
   <>
    <h1>User</h1>
    <button onClick={()=>authUser()}>Auth User</button>
   </>
  )
}

export default App
