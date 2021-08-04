import Star from './Star/Star'
import shortid from 'shortid'


export default function Stars(props) {
  const n = props.count;
    
  if (typeof n === 'number' && n > 0 && n < 6) {
    let res = [...Array(n)].map(i => i = shortid.generate())
    return (
        <ul className="card-body-stars u-clearfix">
            {res.map((i) => (<li key={i}><Star/></li>))}
        </ul>
    )
} else {
    return null;
  }
}
