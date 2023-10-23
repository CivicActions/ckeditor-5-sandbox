import { decode } from 'html-entities';
import HTMLReactParser from 'html-react-parser';
import HelpDrawerToggle from '@cmsgov/design-system/dist/react-components/esm/HelpDrawer/HelpDrawerToggle';
import HelpDrawer from '@cmsgov/design-system/dist/react-components/esm/HelpDrawer/HelpDrawer';
import Tooltip from '@cmsgov/design-system/dist/react-components/esm/Tooltip/Tooltip';
import { CloseIconThin, InfoCircleIconThin } from '@cmsgov/design-system/dist/react-components/esm/Icons';
import '../tooltip/tooltip.scss';

function DSHelpDrawer({drawerToggle, drawerHeading, drawerContent, drawerIndex, sharedDrawerState}) {
  const { activeDrawer } = sharedDrawerState();
  const { updateDrawers} = sharedDrawerState();

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
              component="button"
              placement="auto"
              title={HTMLReactParser(attribs['data-content'])}
            >
              {HTMLReactParser(children[0]['data'])}
            </Tooltip>
          </span>
        )
      }
    }
  }
  return (
    <>
      <HelpDrawerToggle
        helpDrawerOpen={activeDrawer === drawerIndex}
        showDrawer={() => updateDrawers(drawerIndex)}
        inline={true}
      >
        {drawerToggle} <InfoCircleIconThin ariaHidden={true} />
      </HelpDrawerToggle>
      {(activeDrawer === drawerIndex) && <HelpDrawer
          closeButtonText={<CloseIconThin className="ds-u-font-size--lg" />}
          closeButtonVariation="ghost"
          heading={drawerHeading}
          onCloseClick={() => updateDrawers(null)}
          headingLevel={2}
        >
        {HTMLReactParser(decode(drawerContent), options)}
        </HelpDrawer>
      }
    </>
  )
}

export default DSHelpDrawer
