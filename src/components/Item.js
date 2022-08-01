import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, title, price, description, category, image}) => {
    return (
        <div class="row my-2 p-3">
            <div class="col">
                <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                    <p>{price}</p>
                    <p className="card-text">{category}</p>
                    <div>
                    <Link to={"product/" + id }>{title}</Link>
                    </div>
                    <button className="btn btn-primary">Detalle</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Item;

