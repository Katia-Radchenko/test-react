import s from '@emotion/styled';

export const StatisticsList = s.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 25px;
  `;

export const StatisticsListItem = s.li`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    flex-basis: calc(25%);
    padding: 10px;
    color: rgb(255, 255, 255);
    background-color: ${() =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`}; ;
  `;
