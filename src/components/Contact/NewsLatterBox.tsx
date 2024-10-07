'use client';

import { useTheme } from 'next-themes';

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
      <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      className="relative z-10 rounded-sm bg-white shadow-three dark:bg-gray-dark mb-12 lg:mb-5"
      style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', minHeight: '35rem' }}
      src="https://722998d0.sibforms.com/serve/MUIFAD7fgYeGdoirOjpKycqvSEgKG5RR9RKfPJMNZkmgpX1IWSJvjta00eJjkHBgEmQIhVQdBIxFHuC1MUODczOz7DUB8QUL-1zCLJ6MM6tIuGu19L76fa-h4irb8gdsISPlxDTADjL06Ttvkjw-rmugBZ_tJrQeoVqjGMwsmr53ZNtLpvYYlB0ycCqH0jiUVyVPkBZUTovzIc6I"
    ></iframe>
  );
};

export default NewsLatterBox;
