import { useParams } from 'react-router-dom';

import PageSection from '@components/PageSection';
import View from '@components/View';
import { Paragraph } from '@reactoso-ui';

export default function Details(): JSX.Element {
  const { id } = useParams();

  return (
    <View>
      <PageSection>How to play {id}?</PageSection>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem corporis inventore earum error nostrum
        porro? Quas maiores eaque non ipsa fugit et officiis illum. Aspernatur consequatur assumenda cumque, quibusdam
        nulla sint consequuntur unde harum. Necessitatibus hic culpa vero vel officia, officiis aliquid quibusdam.
        Aliquid obcaecati ipsum tenetur temporibus suscipit cupiditate! Quo tenetur officia beatae maxime rem fugit
        aspernatur, odit dolorum saepe nobis eveniet neque! Temporibus sed, architecto ut mollitia nobis nisi illum nam
        magnam ipsam sunt sint. Nobis doloremque amet itaque? Et ducimus dolorum modi nisi, ab harum, a eum iusto
        corrupti eligendi numquam perspiciatis officiis. Temporibus nemo quasi sit!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem corporis inventore earum error nostrum
        porro?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem corporis inventore earum error nostrum
        porro? Quas maiores eaque non ipsa fugit et officiis illum. Aspernatur consequatur assumenda cumque, quibusdam
        nulla sint consequuntur unde harum. Necessitatibus hic culpa vero vel officia, officiis aliquid quibusdam.
        Aliquid obcaecati ipsum tenetur temporibus suscipit cupiditate! Quo tenetur officia beatae maxime rem fugit
        aspernatur, odit dolorum saepe nobis eveniet neque! Temporibus sed, architecto ut mollitia nobis nisi illum nam
        magnam ipsam sunt sint. Nobis doloremque amet itaque? Et ducimus dolorum modi nisi, ab harum, a eum iusto
        corrupti eligendi numquam perspiciatis officiis. Temporibus nemo quasi sit!
      </Paragraph>
    </View>
  );
}
