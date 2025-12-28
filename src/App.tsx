import { Suspense } from "react";
import { FullScreenLoader } from "./components/primitives/index.ts";
import RoutesProvider from "./core/provider/routes.provider.tsx";

function App() {
  
  return (
    <Suspense fallback={<FullScreenLoader open={true} />}>
      <RoutesProvider/>
    </Suspense>
  )
}

export default App
