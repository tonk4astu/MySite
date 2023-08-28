import { Suspense } from 'react'
import RotateCalculation from "../component/RotateCalculation"
import Katikati from "../component/katikati"
export default function Page() {

  return (
    <>
      <Suspense fallback={'loading'}>
        <RotateCalculation />
        <Katikati />
      </Suspense>
    </>
  )

}
