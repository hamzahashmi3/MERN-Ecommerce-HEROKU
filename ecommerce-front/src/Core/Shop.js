import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts, getCategories, getFilteredProducts } from './ApiCore';
import ShowImage from './ShowImage';
import Card from './Card';
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./FixedPrices";
import SearchBar from "./SearchBar";

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });
    const [checked, setCheked] = useState([]);

    const { Categories, category, search, results, searched } = data;

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
                setError(data.error);
            } else {
                console.log(data)
                setCategories(data);
            }
        });
    };
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };
    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };
    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };
    const handleToggle = c => () => {
        // return the first index or -1
        const currentCategoryId = checked.indexOf(c);
        const newCheckedCategoryId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c);
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1);
        }
        // console.log(newCheckedCategoryId);
        setCheked(newCheckedCategoryId);
        handleFilters(newCheckedCategoryId);
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
        loadProductsByArrival();
    }, []);

    const handleFilters = (filters, filterBy) => {
        console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    return (
        
<Layout>
	<SearchBar Categories={categories} handleFilters={filters => handleFilters(filters, "category")} />
	{/* <section class="product spad"> */}
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-5">
					<div class="sidebar">
						<div class="sidebar__item">
							<h4>Department</h4>
							<ul style={{marginLeft: "50px"}}>
                            {categories.map((c, i) => (
								<li key={i}>
									<input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1)} type="checkbox" className="form-check-input"/>
									<label className="form-check-label">{c.name}</label>
								</li>
                            ))}
							</ul>
						</div>
						<div class="sidebar__item">
							<h4>Select Price Range</h4>
							<RadioBox prices={prices} handleFilters={filters => handleFilters(filters, "price")}/>
						</div>
						<div class="sidebar__item">
							<div class="latest-product__text">
								<h4>Latest Products</h4>
								<div class="latest-product__slider owl-carousel">
									<div class="latest-prdouct__slider__item">
                                        {productsByArrival.map((product, i) => (
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <ShowImage item={product} url="product" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.name}</h6>
                                                    <span>Rs {product.price}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div class="col-lg-9 col-md-7">
					<div class="row">
					{filteredResults.map((product, i) => (       
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
						
					</div>
			<hr/>
            {loadMoreButton()}
				</div>
			</div>
		</div>
	{/* </section> */}
	{/* <SearchBar Categories={categories} handleFilters={filters => handleFilters(filters, "category")} />
	<div className="row">
		<div className="col-4">
			<h4>Filter by categories</h4>
			<Checkbox categories={categories} handleFilters={filters => handleFilters(filters, "category")}/>
			<h4>Filter by Price Range</h4>
			<RadioBox prices={prices} handleFilters={filters => handleFilters(filters, "price")}/>
		</div>
		<div className="col-8">
			<h2 className="mb-4">Products</h2>
			<div className="row">
                {filteredResults.map((product, i) => (       
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
			</div>
			<hr/>
            {loadMoreButton()}
		</div>
	</div> */}
</Layout>
    );
};

export default Shop;
