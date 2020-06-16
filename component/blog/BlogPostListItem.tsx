import React from 'react';
import { IBlogPost } from '../../lib/types/cms/models/blog/post.model';

interface Props {
    post: IBlogPost;
}

class BlogPostListItem extends React.Component<Props> {
    render() {
        const post = this.props.post;
        const postAnchor = `/blog/post/${post.slug}`;
        return (<div className="col-md-12" key={post.id}>
        <article className="liquid-lp liquid-blog-item liquid-blog-item-grid liquid-blog-scheme-dark mb-50">
            <figure className="liquid-lp-media">
                <a href={postAnchor}>
                    <img src={post.coverImage.url} alt={post.coverImage.alt} />
                </a>
            </figure>
            <div className="liquid-blog-item-inner">
                <a href={postAnchor} className="liquid-overlay-link">{post.title}</a>
                <header className="liquid-lp-header">
                    <h2 className="liquid-lp-title font-weight-bold h3 size-sm">
                        <a href="#" data-split-text="text" data-split-options="{ &quot;type&quot;: &quot;lines&quot; }">{post.title}</a>
                    </h2>
                    <div className="liquid-lp-details">
                        <time className="liquid-lp-date" dateTime="2017-09-25">5 hours ago</time> in 
                <ul className="liquid-lp-category">
                            <li><a href={postAnchor}>Business</a></li>
                        </ul>
                    </div>{/* /.liquid-lp-details */}
                </header>
                <div className="liquid-lp-excerpt">
                    <p>{post.intro}</p>
                </div>{/* /.latest-post-excerptc */}
                <footer className="liquid-lp-footer">
                    <a href={postAnchor} className="btn btn-naked text-uppercase ltr-sp-1 size-sm font-weight-bold liquid-lp-read-more">
                        <span>
                            <span className="btn-line btn-line-before" />
                            <span className="btn-txt">Continue Reading</span>
                            <span className="btn-line btn-line-after" />
                        </span>
                    </a>
                </footer>
            </div>
        </article>
    </div>)
    }
}

export default BlogPostListItem;