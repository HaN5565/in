import React from 'react';
import s from './ReproductionsItems.module.css'
import Mybtn from '../../../ui/MyBtn/Mybtn';


const ReproductionsItemsGermany = (props) => {

    const item = props.stateGermany.map((item, index) =>
        <div key={index} className={s.item}>
            <div className={s.itemWrapper}>
                <img className={s.itemImg} src={item.img} />
                <p className={s.itemCreator}>{item.creator}</p>
                <p className={s.itemName}>{item.name}</p>
                <p className={s.itemSize}>{item.size}</p>
                <p className={s.itemPrice}>{item.price}</p>
                <div className={s.itemBtn}>
                    <Mybtn btnText='В корзину' />
                </div>
            </div>
        </div>
    )

    return (
        <div className={s.ReproductionsItems}>
            {item}
        </div>
    );
};

export default ReproductionsItemsGermany;