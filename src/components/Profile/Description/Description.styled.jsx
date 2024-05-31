import s from '@emotion/styled';

export const Container = s.div`
    padding: 30px 0px;
    background-color: white;
`;

export const Image = s.img`
    display: block;
    width: 100px;
    margin: 0px auto;
    border: 1px solid rgb(17, 17, 17);
    border-radius: 50px;
`;
export const Text = s.p`
    margin-top: 15px;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.25;
    text-align: center;
    color: ${(props) => props.color || 'black'};
`;

