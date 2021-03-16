import React from 'react';
import NavBar from './../NavBar/NavBar'

class News extends React.Component {
    render() {
        return (
            <section class="main news" id="news">
                <NavBar />
                <h1>Headline News</h1>
                <h3>Topic: COVID-19</h3>
                <article>
                    <h4>See More:</h4>
                    <ul>
                        <li>
                            <a><h4>Test Article 1 Title</h4></a>
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