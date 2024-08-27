import { Suspense } from "react";
import { FormBox } from "../components/login-form/FormBox";
export default function App() {
  return (
    <div className="w-full h-full flex justify-center">
      <Suspense>
        <FormBox />
      </Suspense>
    </div>
  );
}
