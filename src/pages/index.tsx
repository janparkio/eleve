import * as React from 'react';

import Illustrations from '@/components/Illustrations';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-[url('/images/ae044.png')] px-2 pt-32 min-h-screen bg-no-repeat md:px-0">
          <div className='container justify-center items-center px-5 mx-auto space-y-6 max-w-6xl text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl md:text-center'>
              <span className='block'>Muy pronto</span>
            </h1>
            <p className='mx-auto w-full text-base text-center text-gray-500 sm:text-lg md:max-w-3xl md:text-center lg:text-2xl'>
              Estámos en construcción.
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/3'>
              <Illustrations />
            </div>
          </div>
          <footer className='flex relative justify-center pb-8 text-gray-500'>
            © {new Date().getFullYear()} Élève. Todos los derechos reservados.
          </footer>
        </section>
      </main>
    </Layout>
  );
}
