import { FC, useState } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Div,
  Title,
  Button,
} from '@vkontakte/vkui';

interface HomeProps {
  id: string;
}

export const Home: FC<HomeProps> = ({ id }) => {
  const [score, setScore] = useState(0);

  const tap = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <Panel id={id}>
      <PanelHeader>Тап Тап Тап</PanelHeader>

      <Group>
        <Div style={{ textAlign: 'center' }}>
          <Title level="1" weight="1">
            Очки: {score}
          </Title>

          <div style={{ marginTop: 30 }}>
            <Button
              size="l"
              stretched
              onClick={tap}
            >
              👆 ТАП!
            </Button>
          </div>
        </Div>
      </Group>
    </Panel>
  );
};