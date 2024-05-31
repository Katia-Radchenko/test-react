import { StatsItem, StatsList, StatsSpan, StatsSpanNumber } from './Stats.styled';

const Stats = ({ stats }) => {
  return (

    <>

      <StatsList>
        <StatsItem>
          <StatsSpan>Followers</StatsSpan>
          <StatsSpanNumber>{stats.followers}</StatsSpanNumber>
        </StatsItem>
        <StatsItem>
          <StatsSpan>Views</StatsSpan>
          <StatsSpanNumber>{stats.views}</StatsSpanNumber>
        </StatsItem>
        <StatsItem>
          <StatsSpan>Likes</StatsSpan>
          <StatsSpanNumber>{stats.likes}</StatsSpanNumber>
        </StatsItem>
      </StatsList>
    </>
  );
};
export default Stats;
