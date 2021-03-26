import React, { useState, useEffect } from "react";
import { getCategories, list } from "./ApiCore";
import {Link} from 'react-router-dom';
import Card from "./Card";

const Search = ({Categories, handleFilters}) => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });
    const [checked, setCheked] = useState([]);

    const { categories, category, search, results, searched } = data;


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

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, categories: data });
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((product, i) => (
                        <div className="col-4 mb-3">
                            <Card key={i} product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    


    const searchForm = () => (
        <section>
        <div className="container">
            <div className="row">
                
                <div className="col-lg-12">
                    <div className="hero__search">
                        <div className="hero__search__forms">
                            <form onSubmit={searchSubmit}>
                                <select className="hero__search__categories" onChange={handleChange("category")}>
                                    <option value="All">All Categories</option>
                                    {categories.map((c, i) => (
                                        <option key={i} value={c._id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                                <input type="search" placeholder="What do yo u need?" onChange={handleChange("search")} placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                       </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+92301 7111141</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );

    return (
        <div>
            {/* {JSON.stringify(categories)} */}
            <div>{searchForm()}</div>
            {/* <div className="container-fluid mb-3"> */}
                {searchedProducts(results)}
            {/* </div> */}
        </div>
    );
};

export default Search;
