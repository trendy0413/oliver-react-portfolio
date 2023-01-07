import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://medium.com/@trendy0413dev/understanding-var-let-and-const-in-javascript-with-examples-cbf27f9543d9"><span className="blog__category">medium</span></a>
                        <a href="https://medium.com/@trendy0413dev/understanding-var-let-and-const-in-javascript-with-examples-cbf27f9543d9"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Understanding var, let and const in javascript with examples</h3>
                        <div className="blog__meta">
                            <span>7 January, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Oliver</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog