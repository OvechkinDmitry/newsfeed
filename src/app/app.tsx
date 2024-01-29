import './styles/index.scss';
import { cx } from 'shared/lib/class-names';
import { useTheme } from 'app/providers/theme';
import { Router } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export function App() {
  const { theme } = useTheme();
  return (
    <div className={cx('app', theme)}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
}
