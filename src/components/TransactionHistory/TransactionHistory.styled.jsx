import s from '@emotion/styled';


export const Table = s.table`
    width: 800px;
    margin: 60px auto;
  `;

export const Thead = s.thead`
background-color: royalblue;
  `;

export const Tbody = s.tbody`
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.035) 0px 2.8px 2.2px, rgba(0, 0, 0, 0.047) 0px 6.7px 5.3px, rgba(0, 0, 0, 0.06) 0px 12.5px 10px, rgba(0, 0, 0, 0.07) 0px 22.3px 17.9px, rgba(0, 0, 0, 0.086) 0px 41.8px 33.4px, rgba(0, 0, 0, 0.12) 0px 100px 80px;
  `;

export const Tr = s.tr`
&:nth-of-type(2n) {
    background-color: rgb(238, 238, 238);
  `;
