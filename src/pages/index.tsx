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
        <section className=" bg-no-repeat min-h-screen pt-32 px-2 md:px-0">
          <div className='flex justify-center pt-8'>
            <div className='w-3/4 md:w-1/3 lg:w-1/4'>
              <img src='/images/eleve-logo.png' alt='Logo Eleve' />
            </div>
          </div>
          <Logos />
          <div className='container items-center justify-center max-w-6xl mx-auto px-5 pt-8 pb-6 space-y-6 text-center'>
            <h3 className='font-light text-3xl text-center text-gray-600 tracking-tight md:text-4xl'>
              <span className='block'>sitio en construcción</span>
            </h3>
          </div>
          <footer className='flex justify-center py-8 relative text-gray-500'>
            © {new Date().getFullYear()} Élève. Todos los derechos reservados.
          </footer>
        </section>
      </main>
    </Layout>
  );
}
