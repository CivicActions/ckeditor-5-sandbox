import { render } from 'react-dom';
import parse from 'html-react-parser';
import { decode } from 'html-entities';
import Tooltip from '@cmsgov/design-system/dist/react-components/esm/Tooltip/Tooltip';
import './tooltip.scss';

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((item) => {
  const trigger = item.innerHTML.trim();
  const content = item.getAttribute('data-content');
  render(
    <Tooltip
      className={'ds-c-tooltip__trigger-link'}
      component="button"
      placement="auto"
      title={parse(decode(content))}
    >
      {trigger}
    </Tooltip>,
    item
  );
});
