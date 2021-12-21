/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Logos from '@/components/Logos';
import Seo from '@/components/Seo';

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-[url('/images/ae044-red.png')] px-2 pt-32 min-h-screen bg-no-repeat md:px-0">
          <div className='flex justify-center pt-8'>
            <div className='w-3/4 md:w-1/3 lg:w-1/4'>
              <img src='/images/eleve-logo.png' alt='Logo Eleve' />
            </div>
          </div>

          <div className='container justify-center items-center px-5 py-6 mx-auto space-y-6 max-w-6xl text-center'>
            <h3 className='font-base text-4xl tracking-tight text-center text-gray-900 md:text-5xl md:text-center'>
              <span className='block'>En construcción</span>
            </h3>
          </div>
          <Logos />
          <footer className='flex relative justify-center py-8 text-gray-500'>
            © {new Date().getFullYear()} Élève. Todos los derechos reservados.
          </footer>
        </section>
      </main>
    </Layout>
  );
}
