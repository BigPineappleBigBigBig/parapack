export default {
    'pp-base-btn': {
        '@apply': 'cursor-pointer inline-flex items-center justify-center border-none rounded-10px pp-bg text-white font-700 select-none hover:!text-white focus-visible:!outline-none',
    },
    'pp-btn-secondary': {
        '@apply': '!pp-bg-t1',
    },
    'pp-btn-disable': {
        '@apply': '!pp-bg-border-2 !pp-text-t2 !cursor-not-allowed pointer-events-none',
    },
    'pp-btn-24-l': {
        '@apply': 'pp-base-btn !text-24px !px-75px !h-70px',
    },
    'pp-btn-20-l': {
        '@apply': 'pp-base-btn !text-20px !px-50px !h-62px',
    },
    'pp-btn-transparent': {
        '@apply': 'pp-btn-24-l pp-text-primary border-solid border-1 pp-border-primary !bg-transparent hover:!pp-text-primary',
    },
    'pp-btn-transparent-primary': {
        '@apply': 'pp-btn-24-l pp-text-primary border-solid border-1 pp-border-primary !bg-transparent hover:(!pp-text-white !pp-bg)',
    },
    'pp-btn-transparent-cancel': {
        '@apply': 'pp-base-btn !px-40px !pp-text-t1 !border-solid !border-1 !pp-border !bg-transparent hover:(!pp-border-primary !pp-text-primary !bg-transparent)',
    },
};
