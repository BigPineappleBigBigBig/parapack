export default {
  'ubox-base-btn': {
    '@apply': 'cursor-pointer inline-flex items-center justify-center border-none rounded-100px ubox-bg ubox-text-reverse font-700 select-none hover:!ubox-text-reverse focus-visible:!outline-none',
  },
  'ubox-btn-secondary': {
    '@apply': '!ubox-bg-t1',
  },
  'ubox-btn-disable': {
    '@apply': '!ubox-bg-border-2 !ubox-text-t2 !cursor-not-allowed pointer-events-none',
  },
  'ubox-btn-18-l': {
    '@apply': 'ubox-base-btn text-18px px-71px h-58px',
  },
  'ubox-btn-18-m': {
    '@apply': 'ubox-base-btn text-18px px-50px h-54px',
  },
  'ubox-btn-18-s': {
    '@apply': 'ubox-base-btn text-18px px-71px h-44px',
  },
  'ubox-btn-18-xs': {
    '@apply': 'ubox-base-btn text-18px px-95px h-40px',
  },
  'ubox-btn-16-l': {
    '@apply': 'ubox-base-btn text-16px px-71px h-58px',
  },
  'ubox-btn-16-m': {
    '@apply': 'ubox-base-btn text-16px px-30px h-52px',
  },
  'ubox-btn-16-s': {
    '@apply': 'ubox-base-btn text-16px px-30px h-40px',
  },
  'ubox-btn-16-xs': {
    '@apply': 'ubox-base-btn text-16px px-26px h-34px',
  },
  'ubox-btn-14': {
    '@apply': 'ubox-base-btn text-14px !px-40px h-40px',
  },
  'ubox-btn-12': {
    '@apply': 'ubox-base-btn text-12px h-28px',
  },
  'ubox-btn-transparent': {
    '@apply': 'ubox-base-btn !px-40px !ubox-text-t1 !border-solid !border-1 !ubox-border-t1 !bg-transparent hover:!ubox-text-t1',
  },
  'ubox-btn-transparent-primary': {
    '@apply': 'ubox-base-btn px-40px ubox-text-primary border-solid border-1 ubox-border-primary !bg-transparent hover:(!ubox-text-reverse !ubox-bg)',
  },
  'ubox-btn-transparent-cancel': {
    '@apply': 'ubox-base-btn !px-40px !ubox-text-t1 !border-solid !border-1 !ubox-border !bg-transparent hover:(!ubox-border-primary !ubox-text-primary !bg-transparent)',
  },
};
