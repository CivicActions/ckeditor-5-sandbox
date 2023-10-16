import { useState } from 'react';
import { decode } from 'html-entities';
import parse from 'html-react-parser';
import HelpDrawerToggle from '@cmsgov/design-system/dist/react-components/esm/HelpDrawer/HelpDrawerToggle';
import HelpDrawer from '@cmsgov/design-system/dist/react-components/esm/HelpDrawer/HelpDrawer';
import Tooltip from '@cmsgov/design-system/dist/react-components/esm/Tooltip/Tooltip';
import { CloseIconThin } from '@cmsgov/design-system/dist/react-components/esm/Icons';

function DSHelpDrawer({toggle, drawer_heading, drawer_content}) {
  const [drawer, showDrawer] = useState(false);

  // function handleDrawerOpen() {
  //   showDrawer(true);
  //   document.addEventListener('click', function(e) {
  //     if (e.target.classList.contains('ds-c-help-drawer')) {
  //       showDrawer(false);
  //     }
  //   });
  // }

  // Options for the html-react-parser that target tooltips included
  // in help drawer content.
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'span' && attribs.class === 'tooltip') {
        return (
          // Add a span wrapper with the tooltip ID as a data attribute
          // to simulate the output of a standard tooltip in rich text fields.
          <span className='tooltip' data-tooltip-id={attribs['data-tooltip-id']}>
            <Tooltip
              className={'ds-c-tooltip__trigger-link'}
              component="a"
              placement="auto"
              title={parse(decode(attribs['data-content']))}>
              {parse(children[0]['data'])}
            </Tooltip>
          </span>
        )
      }
    }
  }

  return (
    <>
      <HelpDrawerToggle
        helpDrawerOpen={drawer}
        showDrawer={() => showDrawer(true)}
        inline={true}
      >
        {toggle} <i className="far fa-info-circle" aria-hidden="true"></i>
      </HelpDrawerToggle>
      {drawer && <HelpDrawer
          closeButtonText={<CloseIconThin className="ds-u-font-size--lg" />}
          closeButtonVariation="ghost"
          heading={drawer_heading}
          onCloseClick={() => showDrawer(false)}
          hasFocusTrap={true}
          headingLevel={2}
        >
        {parse(decode(drawer_content), options)}
        </HelpDrawer>
      }
    </>
  )
}

export default DSHelpDrawer
