/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
export default function Logos() {
  return (
    <div className=''>
      <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <a
            href='https://www.americana.edu.py/'
            target='_blank'
            className='transition-all ease-in-out hover:brightness-110 hover:saturate-0'
            rel='noreferrer'
          >
            <div className='flex col-span-1 justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12'
                src='/images/americana-logo.png'
                alt='Universidad Americana'
              />
            </div>
          </a>
          <a
            href='https://www.sudamericana.edu.py/'
            target='_blank'
            className='transition-all ease-in-out hover:brightness-110 hover:saturate-0'
            rel='noreferrer'
          >
            <div className='flex col-span-1 justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12'
                src='/images/usud-logo.png'
                alt='Universidad Sudamericana'
              />
            </div>
          </a>
          <div className='flex col-span-1 justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12'
              src='/images/wizard-logo.png'
              alt='Wizard Logo'
            />
          </div>
          <div className='flex col-span-1 justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12'
              src='/images/haizea-logo.png'
              alt='Hazea Logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
