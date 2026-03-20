import { useQuery } from "@tanstack/react-query"
import Header from "./components/Header"
import Form from "./features/comments/components/Form"


const getComments = async () => {
  const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
  const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;

  console.log("LLAVE CARGADA:", import.meta.env.VITE_JSONBIN_API_KEY);
  console.log("BIN ID CARGADO:", import.meta.env.VITE_JSONBIN_BIN_ID);

  if (!API_KEY || !BIN_ID) {
    throw new Error("Las variables de entorno no están cargadas. Revisa tu archivo .env");
  }

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    method: 'GET',
    headers: {
      "X-Master-Key": API_KEY,
      "Content-Type": "application/json",
      "X-Bin-Meta": "false",
    }
  })
  const data = await response.json()
  return data
}

function App() {

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div className="text-center mt-10">Cargando comentarios...</div>;

  if (isError) return <div className="text-red-500 text-center mt-10">Error: {error.message}</div>;

  return (
    <>
      <Header />
      <hr className="mt-4 mx-auto w-10/12 max-w-3xl border-gray-300" />
      <div className="mt-6 text-center">
        {JSON.stringify(data)}
      </div>
      <Form />
    </>
  )
}

export default App