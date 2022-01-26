import Image from 'next/image';
/* import Link from 'next/link'; */

export default function NotFound() {
  return (
    <div className="not-found">
      <Image src="/404.jpg" alt="Astronauta e cachorro no espaço- Computer vector created by stories" layout='fill' />
      {/* <h1>Ooops...</h1>
      <h2>Página não encontrada!</h2> */}
      {/* <p>Volte para <Link href="/"><a>Página Inicial</a></Link></p> */}

      {/* <a href="https://www.freepik.com/vectors/computer">Computer vector created by stories - www.freepik.com</a> */}

      <style jsx>{`
        h1 {
          color: purple;
        }
      `}</style>
    </div>
  )
}