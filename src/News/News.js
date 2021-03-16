import React from 'react';


class News extends React.Component {
    render() {
        return (
            <section className="main news" id="news">
                <h1>Headline News</h1>
                <h3>Topic: COVID-19</h3>
                <article>
                    <h4>See More:</h4>
                    <ul>
                        <li>
                           <h4><a href="tbd.com">Test Article 1 Title</a></h4>
                            <p>Test article content goes here</p>
                        </li>
                        <li>
                            <h4>Test Article 2 Title</h4>
                        </li>
                        <li>
                            <h4>Test Article 3 Title</h4>
                        </li>
                    </ul>
                </article>
            </section>
        )
    }
}

export default News;