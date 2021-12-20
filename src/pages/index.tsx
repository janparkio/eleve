import * as React from 'react';

import Illustrations from '@/components/Illustrations'
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="px-2 pt-32 bg-[url('/images/ae044.png')] bg-no-repeat md:px-0 min-h-screen">
          <div className="container justify-center items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl md:text-center">
              <span className="block">Muy pronto</span>
            </h1>
            <p className="w-full mx-auto text-base text-center text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
              Estámos en construcción. Grupo Élève.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <Illustrations />
            </div>
          </div>
          <footer className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-500'>
            © {new Date().getFullYear()} {" "}
            Grupo Élève. Todos los derechos reservados.
          </footer>
        </section>
      </main>
    </Layout>
  );
}
