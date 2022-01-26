import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
        <Image src="/404.jpg" alt="Astronauta e cachorro no espaço- Computer vector created by stories" height='600' width='850'/>
        {/* <h1>Ooops...</h1>
        <h2>Página não encontrada!</h2> */}
        <p><Link href="/"><a>Volte para a Página Inicial</a></Link></p>
      {/* <a href="https://www.freepik.com/vectors/computer">Computer vector created by stories - www.freepik.com</a> */}

      <style jsx>{`
        .not-found {
          align-itens: center;
          justify-content: center;
          text-align: center;
          
        }
        p {
          font-size: 18px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}