import React, { useContext } from 'react';
import Item from './Item';

function Project() {
    const data = useContext(Item);

    return <div className="card" style={{ width: '18rem' }}>
        <img src={data.photo} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
                {data.name} is {data.age} years old.
        </p>
        </div>
    </div>
}
export default Project;