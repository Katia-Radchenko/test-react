import s from '@emotion/styled';


export const FriendItem = s.li`
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.035) 0px 2.8px 2.2px, rgba(0, 0, 0, 0.047) 0px 6.7px 5.3px, rgba(0, 0, 0, 0.06) 0px 12.5px 10px, rgba(0, 0, 0, 0.07) 0px 22.3px 17.9px, rgba(0, 0, 0, 0.086) 0px 41.8px 33.4px, rgba(0, 0, 0, 0.12) 0px 100px 80px;
  `;

export const FriendSpan = s.span`
    width: 20px;
    height: 20px;
    background-color:${(props)=> (props.status ? 'green' : 'red')};
    border-radius: 50%;
`;

export const FriendImg = s.img`
     margin: 0px 10px;
`;

export const FriendText = s.p`
   font-weight: 700;
    font-size: 20px;
    line-height: 1.15;
`;
