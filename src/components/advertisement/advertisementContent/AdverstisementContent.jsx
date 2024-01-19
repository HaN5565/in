import React from 'react';
import s from '../Advertisement.module.css'

const AdvertisementContent = () => {
    return (
        <div className={s.advertisementContent}>
            <div className={s.top}>
                Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
            </div>
            <div className={s.bottom}>
                Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
            </div>
        </div>
    );
};

export default AdvertisementContent;