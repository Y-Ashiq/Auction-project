import'./cat-card.css';
const CatCard = (props) => {

    const imageSrc = props.imageSrc;
    const name = props.name;
    return ( 
        <div>
              <div className="cate-cards">
              <img src={imageSrc}  alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>{name}</h3>
            </div>
        </div>
     );
}
 
export default CatCard;