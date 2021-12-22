/* eslint-disable @next/next/no-img-element */
export default function Logos() {
  return (
    <>
      <div className='max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='grid gap-y-8 gap-x-4 grid-cols-2 md:grid-cols-4'>
          <a
            href='https://www.americana.edu.py/'
            target='_blank'
            className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
            rel='noreferrer'
          >
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12 object-contain'
                src='/images/americana-logo.png'
                alt='Universidad Americana'
              />
            </div>
          </a>
          <a
            href='https://www.sudamericana.edu.py/'
            target='_blank'
            className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
            rel='noreferrer'
          >
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12 object-contain'
                src='/images/usud-logo.png'
                alt='Universidad Sudamericana'
              />
            </div>
          </a>
          <a
            href='https://www.wizard.com.br/'
            target='_blank'
            className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
            rel="noreferrer"
          >
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12 object-contain'
                src='/images/wizard-logo.png'
                alt='Wizard Logo'
              />
            </div>
          </a>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12 object-contain'
              src='/images/haizea-logo.png'
              alt='Haizea Logo'
            />
          </div>
        </div>
      </div>
    </>
  );
}
