import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageSection from '@components/PageSection';
import { Button, Input } from '@reactoso-ui';

export default function Details(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="view anim">
      <PageSection>Details</PageSection>
      <div>latest</div>
    </div>
  );
}
