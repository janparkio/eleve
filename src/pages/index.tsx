/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Logos from '@/components/Logos';
import PrimaryLogo from '@/components/PrimaryLogo';
import Seo from '@/components/Seo';

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className=''>
        <section className="bg-no-repeat min-h-screen pt-32 px-2 md:px-0">
          <div className='flex justify-center py-8'>
            <div className='w-64 max-w-sm md:w-2/3 lg:w-3/4'>
              <PrimaryLogo className='text-primary' />
            </div>
          </div>
          <Logos />
          <div className='container items-center justify-center max-w-sm md:max-w-6xl mx-auto px-5 pt-8 pb-6 space-y-6 text-center'>
          <div className='container items-center justify-center max-w-6xl mx-auto px-5 pt-8 pb-6 space-y-6 text-center'>
            <h3 className='font-light text-3xl text-center text-gray-600 tracking-tight md:text-4xl'>
              <span className='block'>sitio en construcción</span>
            </h3>
          </div>
          <div className='absolute inset-x-0 bottom-0'>
            <footer className='bg-gray-50 flex justify-center items-center relative'>
              <div className='text-gray-500 py-10'>
                © {new Date().getFullYear()} Élève. Todos los derechos reservados.
              </div>
            </footer>
          </div>
          <footer className='flex justify-center py-8 relative text-gray-500'>
            © {new Date().getFullYear()} Élève. Todos los derechos reservados.
          </footer>
        </section>
      </main>
    </Layout>
  );
}
