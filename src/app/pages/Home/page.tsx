import { useRef } from 'react';

import PageHeader from '@components/PageHeader';
import { Container } from '@reactoso-ui';

import HorizontalCard from './components/HorizontalCard';
import { ReactRouterBody, ReduxSagaBody, WebpackBody, IntlBody } from './components/HorizontalCard/BodyRenderers';
import { WebpackIcon, ReactRouterIcon, ReduxSagaIcon, FormatJSIcon } from './icons';

import './style.scss';

export default function Page(): JSX.Element {
  const featuresRef = useRef(null);

  return (
    <div>
      <PageHeader>Home</PageHeader>
      {/* <Hero onLearnMoreClick={handleLearnMoreClick} /> */}
      <Container size="lg" direction="column" className="features-container anim">
        <h2 ref={featuresRef} className="features-title">
          Features
        </h2>
        <HorizontalCard icon={WebpackIcon}>
          <WebpackBody />
        </HorizontalCard>
        <HorizontalCard icon={ReactRouterIcon}>
          <ReactRouterBody />
        </HorizontalCard>
        <HorizontalCard icon={ReduxSagaIcon}>
          <ReduxSagaBody />
        </HorizontalCard>
        <HorizontalCard icon={FormatJSIcon}>
          <IntlBody />
        </HorizontalCard>
      </Container>
    </div>
  );
}
