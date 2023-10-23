import React, { useState, useCallback } from 'react';
import { useBetween } from 'use-between';
import { render } from 'react-dom';
import DSHelpDrawer from './DSHelpDrawer';
import './help-drawer.scss';

// Since each drawer is added independently via react-dom,
// we set up a custom hook to handle managing the open/closed
// state of all drawers on the page. This makes it so that
// when a drawer is already open, and another is clicked open,
// the intital drawer closes.
// This is made possible by the 'useBetween' hook.
// See: https://github.com/betula/use-between.
const useActiveDrawer = () => {
  // The default state is set to null, then updated to be the active
  // drawer's index when the drawer is clicked open. When that state
  // value changes to no longer match the drawer's index, it will
  // close.
  const [activeDrawer, setActiveDrawer] = useState(null);
  const updateDrawers = useCallback((i) => setActiveDrawer(i), []);
  return {
    activeDrawer,
    updateDrawers,
  };
};

const useSharedDrawerState = () => useBetween(useActiveDrawer);

const drawers = document.querySelectorAll('.help-drawer');

drawers.forEach((item, index) => {
  const toggle = item.innerHTML.trim();
  const drawer_content = item.getAttribute('data-content');
  const drawer_heading = item.getAttribute('data-title');
  render(
    <DSHelpDrawer
      drawerToggle={toggle}
      drawerContent={drawer_content}
      drawerHeading={drawer_heading}
      drawerIndex={index}
      sharedDrawerState={useSharedDrawerState}
    />,
    item
  );
});
