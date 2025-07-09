import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center m-30">
      <h1 className="text-center font-bold"> Página não encontrada! </h1>
      <p> Essa página que tentou acessar, não existe!</p>

      <Link className="text-sky-600" href='/'>Voltar para home</Link>
    </div>
  );
}
