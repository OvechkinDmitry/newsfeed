import './styles/index.scss';
import { cx } from 'shared/lib/class-names';
import { Router } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export const App = () => (
  <div className={cx('app')}>
    <Navbar />
    <div className="content">
      <Sidebar />
      <Router />
    </div>
  </div>
);
