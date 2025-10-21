import React, { useEffect, useState } from 'react'
import './../styles/Articles.css'
import { ArrowDown } from 'lucide-react'
import axios from 'axios'

const Articles = () => {
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/product/getAll`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setAllArticles(response.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();

    }, [])



    return (
        <div>
            <div className="pricelist-article-row pricelist-header-row">
                <div className="article-cell article-no">
                    Article No.
                    <ArrowDown className="sort-arrow" size={22} />
                </div>
                <div className="article-cell product-service " style={{ display: "flex", alignItems: "center" }}>
                    Product/Service
                    <ArrowDown className="sort-arrow" size={22} />
                </div>
                <div className="article-cell in-price">In Price</div>
                <div className="article-cell price">Price</div>
                <div className="article-cell unit">Unit</div>
                <div className="article-cell in-stock">In Stock</div>
                <div className="article-cell description">Description</div>
                <div className="article-cell options-cell"></div> {/*empty cell for ... alignment */}
            </div>
            {/* All Articles  */}
            <div className='articles-container'>
                {allArticles.map((article) => (
                    <ArticleComponent
                        key={article.id}
                        id={article.id}
                        articleNo={article.articleNo}
                        productName={article.productName}
                        inPrice={article.inPrice}
                        price={article.price}
                        unit={article.unit}
                        inStock={article.inStock}
                        description={article.description}
                    />
                ))}
            </div>
        </div>
    )
}


const ArticleComponent = ({ id, articleNo, productName, inPrice, price, unit, inStock, description }) => {

    const [articleData, setArticleData] = useState({
        articleNo,
        productName,
        inPrice,
        price,
        unit,
        inStock,
        description,
    });


    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setArticleData((prev) => ({ ...prev, [name]: value }));
    };

    const onBlurHandle = async (e) => {
        let { name, value } = e.target;
        if (name === "articleNo" || name === "inPrice" || name === "price" || name === "inStock") {
            value = parseInt(value);
        }

        try {

            await axios.put(
                `${import.meta.env.VITE_BASE_URL}/api/v1/product/update/${id}`,
                {
                    [name]: value
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
        } catch (err) {
            console.error("Error updating article:", err);
        }
    };

    return (
        <div className="pricelist-article-row">
            <div className="article-cell article-no"><input className="cell-content" name="articleNo" value={articleData.articleNo} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell product-service"><input className="cell-content" name="productName" value={articleData.productName} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell in-price"><input className="cell-content" name="inPrice" value={articleData.inPrice} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell price"><input className="cell-content" name="price" value={articleData.price} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell unit"><input className="cell-content" name="unit" value={articleData.unit} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell in-stock"><input className="cell-content" name="inStock" value={articleData.inStock} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell description"><input className="cell-content" name="description" value={articleData.description} onChange={onChangeHandle} onBlur={onBlurHandle} /></div>
            <div className="article-cell options-cell">
                <div className="triple-dot">...</div>
            </div>
        </div>
    );
}


export default Articles