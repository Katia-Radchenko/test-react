import StatisticsItem from './StatisticsItem/StatisticsItem';
import { Container } from '../Profile/Profile.styled';
import { Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsItem/StatisticsItem.steled';

const Statistics = ({ title, stats }) => {

  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        <StatisticsItem data={stats}/>
      </StatisticsList>
    </Container>
  );
};

export default Statistics;
