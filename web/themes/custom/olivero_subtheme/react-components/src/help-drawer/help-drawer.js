import { render } from 'react-dom';
import DSHelpDrawer from './DSHelpDrawer';
import '@cmsgov/design-system/dist/css/core-theme.css';
import '@cmsgov/design-system/dist/css/index.css';

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
