import s from '@emotion/styled';


export const StatsList = s.ul`
   display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    list-style: none;
    background-color: rgb(238, 238, 238);
    border: 1px solid rgb(153, 153, 153);
    padding-left: 0px;
`;

export const StatsItem = s.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  flex-basis: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid #999999;
  }
`;
export const StatsSpan = s.span`
     margin: 0px auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.25;
    color: rgb(153, 153, 153);
`;

export const StatsSpanNumber = s.span`
margin: 0px auto;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.25;
`;
