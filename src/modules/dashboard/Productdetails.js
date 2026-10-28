import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productdetails() {
const {id} = useParams();
const [product,updateproduct] = useState({});

    const myapi = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((r) => {
            console.log(r.data);
            updateproduct(r.data);
        });
    }

    useEffect(()=>{
        myapi();
    },[])



//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-3'>
//                 <img src={product.thumbnail}/>
//             </div>
//             <div className='col-md-9'>
//                 <p className='h3'><b>Title:</b> {product.title}</p>
//                 <p className='h4'><b>Category:</b> {product.category}</p>
//             </div>
//         </div>
//     </div>
//   )
return (
    <div className="container py-5">

        <div className="border-bottom mb-4 pb-3">
            <h2 className="fw-bold">Product Details</h2>
            <p className="text-muted mb-0">
                Home / Products / {product.title}
                <Link to="/landing/service" className="btn btn-sm btn-danger">Back</Link>
            </p>
        </div>

        <div className="row g-4">

            {/* Product Image */}
            <div className="col-md-5">
                <div className="border rounded p-3 bg-white">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid w-100"
                        style={{
                            height: "350px",
                            objectFit: "contain"
                        }}
                    />
                </div>

                <div className="d-flex gap-2 mt-3 flex-wrap">
                    {product.images?.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.title} ${index + 1}`}
                            className="border rounded p-1"
                            style={{
                                width: "75px",
                                height: "75px",
                                objectFit: "contain"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Product Information */}
            <div className="col-md-7">

                <span className="badge bg-secondary mb-2">
                    {product.category}
                </span>

                <h2 className="fw-bold mb-3">
                    {product.title}
                </h2>

                <p className="text-muted">
                    Product ID: {product.id}
                </p>

                <div className="border-bottom pb-3 mb-3">
                    <span className="fs-3 fw-bold">
                        ${product.price}
                    </span>

                    <span className="text-danger ms-3">
                        {product.discountPercentage}% OFF
                    </span>

                    <p className="text-muted mt-2 mb-0">
                        ⭐ {product.rating} / 5
                    </p>
                </div>

                <p className="text-secondary">
                    {product.description}
                </p>

                <div className="border rounded p-3 mb-4">
                    <p className="mb-2">
                        <b>Brand:</b> {product.brand || "N/A"}
                    </p>

                    <p className="mb-2">
                        <b>SKU:</b> {product.sku || "N/A"}
                    </p>

                    <p className="mb-2">
                        <b>Availability:</b>{" "}
                        {product.availabilityStatus || "N/A"}
                    </p>

                    <p className="mb-0">
                        <b>Warranty:</b>{" "}
                        {product.warrantyInformation || "N/A"}
                    </p>
                </div>

                <h5 className="fw-bold">Product Tags</h5>

                <div className="d-flex gap-2 flex-wrap mb-4">
                    {product.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="border rounded px-3 py-2 small"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="btn btn-dark px-4 py-2">
                    Add to Cart
                </button>

            </div>
        </div>

        {/* Additional Information */}
        <div className="mt-5 border rounded p-4">
            <h4 className="fw-bold border-bottom pb-3 mb-3">
                Additional Information
            </h4>

            {Object.entries(product).map(([key, value]) => (
                <div
                    key={key}
                    className="row border-bottom py-3"
                >
                    <div className="col-md-4 fw-semibold text-capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                    </div>

                    <div className="col-md-8 text-secondary">
                        {value !== null && typeof value === "object"
                            ? JSON.stringify(value, null, 2)
                            : String(value ?? "N/A")}
                    </div>
                </div>
            ))}
        </div>

        {/* Customer Reviews */}
        <div className="mt-5">
            <h4 className="fw-bold border-bottom pb-3">
                Customer Reviews
            </h4>

            {product.reviews?.length ? (
                product.reviews.map((review, index) => (
                    <div
                        key={index}
                        className="border rounded p-3 mb-3"
                    >
                        <h6 className="fw-bold">
                            {review.reviewerName}
                        </h6>

                        <p className="mb-1">
                            ⭐ {review.rating} / 5
                        </p>

                        <p className="mb-0 text-secondary">
                            {review.comment}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-muted">
                    No reviews available.
                </p>
            )}
        </div>

    </div>
);

}

export default Productdetails





