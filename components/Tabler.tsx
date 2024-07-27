"use client"

import { useEffect } from 'react';

function Tabler() {
  useEffect(() => {
    require('@tabler/core/dist/js/tabler.min.js');
  }, []);

  return null;
}

export default Tabler;