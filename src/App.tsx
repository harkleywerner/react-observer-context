import { configureStore, createReducer } from "../lib"


const r = createReducer<{test ?: number},{setTest : number}>({
   state : {
     test : 1
   },
   actions : {
    setTest : (state,payload) => {
       state.test = payload
    }
   }
})



const { ObserverStore, useDispatch, useSelector } = configureStore({
  r: r
})


const Ts = () => {

  const t = useSelector((store) => store.r.test)

  const dipatch = useDispatch()


  return (
    <>
      <button onClick={() =>dipatch(({r}) => r.setTest(1)) }>asdasdasds</button>
    </>
  )
}

function App() {


  return (
    <>
      <ObserverStore>
        <Ts></Ts>
      </ObserverStore>
    </>



  )
}

export default App
