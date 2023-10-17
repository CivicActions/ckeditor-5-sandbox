import { render } from 'react-dom';
import DSHelpDrawer from './DSHelpDrawer';
import './help-drawer.scss';

const drawers = document.querySelectorAll('.help-drawer');

drawers.forEach((item) => {
  const toggle = item.innerHTML.trim();
  const drawer_content = item.getAttribute('data-content');
  const drawer_heading = item.getAttribute('data-title');
  render(
    <DSHelpDrawer
      toggle={toggle}
      drawer_content={drawer_content}
      drawer_heading={drawer_heading}
    />,
    item
  );
});
