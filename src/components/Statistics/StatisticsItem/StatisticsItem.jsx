import { StatisticsListItem } from './StatisticsItem.steled';


const StatisticsItem = ({ data }) =>{
 const elements = data.map((item) =><StatisticsListItem key={item.id}>
      <span>{item.label}</span>
      <span>{item.percentage}</span>
    </StatisticsListItem>)
  return elements
}

export default StatisticsItem
