import { clsx } from 'clsx';

const Button = ({ children, variant = 'fill' }) => {
  return (
    <button className={clsx('px-6 py-4 rounded-br-3xl  font-semibold text-sm', {
        'bg-orange-400 text-white': variant === 'fill',
        'border-2 border-orange-400 text-gray-400 py-3':  variant === 'outline'
    })}>
      {children}
    </button>
  );
};

export default Button;
