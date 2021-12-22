/* eslint-disable @next/next/no-img-element */
export default function Logos() {
  return (
    <>
      <div className='max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='grid gap-y-8 gap-x-4 grid-cols-2 md:grid-cols-4'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <a
              href='https://www.americana.edu.py/'
              target='_blank'
              className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
              rel='noreferrer'
            >
              <img
                className='object-contain w-48'
                src='/images/americana-logo.png'
                alt='Universidad Americana'
              />
            </a>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <a
              href='https://www.sudamericana.edu.py/'
              target='_blank'
              className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
              rel='noreferrer'
            >
              <img
                className='object-contain w-48'
                src='/images/usud-logo.png'
                alt='Universidad Sudamericana'
              />
            </a>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <a
              href='https://www.wizard.com.br/'
              target='_blank'
              className='ease-in-out transition-all hover:brightness-110 hover:saturate-0'
              rel="noreferrer"
            >
              <img
                className='object-contain w-48'
                src='/images/wizard-logo.png'
                alt='Wizard Logo'
              />
            </a>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='object-contain w-48'
              src='/images/haizea-logo.png'
              alt='Haizea Logo'
            />
          </div>
        </div>
      </div>
    </>
  );
}
