"use client"

import { useEffect } from 'react';

function Theme() {
  useEffect(() => {
    require('@tabler/core/dist/js/demo-theme.min.js');
  }, []);

  return null;
}

export default Theme;