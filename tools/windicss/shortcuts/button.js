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
    'pp-btn-21-l': {
        '@apply': 'pp-base-btn !text-21px !px-64px !h-60px',
    },
    'pp-btn-17-l': {
        '@apply': 'pp-base-btn !text-17px !px-42px !h-53px',
    },
    'pp-btn-transparent': {
        '@apply': 'pp-btn-21-l pp-text-primary border-solid border-1 pp-border-primary !bg-transparent hover:!pp-text-primary',
    },
    'pp-btn-transparent-primary': {
        '@apply': 'pp-btn-21-l pp-text-primary border-solid border-1 pp-border-primary !bg-transparent hover:(!pp-text-white !pp-bg)',
    },
    'pp-btn-transparent-cancel': {
        '@apply': 'pp-base-btn !px-40px !pp-text-t1 !border-solid !border-1 !pp-border !bg-transparent hover:(!pp-border-primary !pp-text-primary !bg-transparent)',
    },
};
