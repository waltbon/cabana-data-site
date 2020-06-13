import React from 'react';
import SignupBlog from './SignupBlog';
import { IBlogCategory } from '../../lib/types/cms/models/blog/category.model';

interface Props {
    allPostCategories: IBlogCategory[];
}

export default class extends React.Component<Props> {
    render() {
        return (
            <aside className="main-sidebar">
                <div className="widget widget_search">
                    <SignupBlog />
                </div>{/* /.widget_search */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                        {
                            Array.isArray(this.props.allPostCategories) && this.props.allPostCategories.map(cat => {
                                return (
                                    <li key={cat.id}><a href={`/blog/category/${cat.id}/${cat.slug}`}>{cat.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>{/* /.widget_categories */}
                <div className="widget widget_media_image">
                    <a href="#">
                        {/* <img src="./assets/demo/misc/sponsored-min.jpg" alt="Sponsoreds" /> */}
                    </a>
                </div>{/* /.widget_media_image */}
            </aside>

        )
    }
}