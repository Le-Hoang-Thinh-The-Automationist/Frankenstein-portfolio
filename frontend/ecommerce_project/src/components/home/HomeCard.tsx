import { Link } from 'react-router-dom'
import styles from './HomeCard.module.css'

type HomeCardProps ={
    key: string,
    product: JSON,
}



const HomeCard :React.FC<HomeCardProps> = ({key, product}) => {
    product
    return (
    <div className={`col-md3 ${styles.col}`}>
        <Link to="/detail" className={styles.link}>
        <div className={styles.card}>
            <div className={styles.cardImgWrapper}>
                <img
                    src=""
                    className={styles.cardImgTop}
                    alt="Product Image"
                />
            </div>
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
                <h6 className={styles.cardText}>$100.75</h6>
            </div>
        </div>
        </Link>  
    </div>
  )
}

export default HomeCard
