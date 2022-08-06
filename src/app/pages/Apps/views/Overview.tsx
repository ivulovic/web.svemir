import { DesktopCard, Scrollable } from '@reactoso-ui';

export default function AppsOverview(): JSX.Element {
  return (
    <Scrollable id="quick-nav">
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
    </Scrollable>
  );
}
