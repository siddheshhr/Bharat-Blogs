import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector(state => state.theme);
  return (
    <div className={theme}>
      <div className='dark:bg-[rgb(16,23,42)] bg-white text-gray-700 dark:text-gray-200 d min-h-screen'>
        {children}
      </div>
    </div>
  );
}
