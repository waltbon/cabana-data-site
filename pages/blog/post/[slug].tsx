import { NextPage } from 'next';
import PageLayout from '../../../component/layout/PageLayout';
import { DatoCMSService } from '../../../lib/services/cms/dato-cms.service';
import { IBlogPost } from '../../../lib/types/cms/models/blog/post.model';
import HeaderAlternativeTransparent from '../../../component/layout/HeaderAlternativeTransparent';

const BlogPostPage: NextPage<{ post: IBlogPost }> = ({ post }) => {
    console.log("post", post.publicationDate)
    const publicationDate = new Date(post.publicationDate);
    const coverImage = `${post.coverImage.url}?fit=crop&w=1920&h=960`;
    return (
        <PageLayout type="article" url={`blog/post/${post.slug}`} author={post.author.name} seo={post.seo} hideMainHeader={true}>
            <HeaderAlternativeTransparent />
            <div className="blog-single-cover scheme-light" data-fullheight="true" data-inview="true" data-inview-options="{ &quot;onImagesLoaded&quot;: true }" style={{ backgroundColor: '#666871' }}>
                <figure className="blog-single-media" data-responsive-bg="true" data-parallax="true" data-parallax-options="{ &quot;parallaxBG&quot;: true, &quot;triggerHook&quot;: &quot;onLeave&quot; }" data-parallax-from="{ &quot;translateY&quot;: &quot;0%&quot; }" data-parallax-to="{ &quot;translateY&quot;: &quot;20%&quot; }">
                    <img src={coverImage} alt={post.coverImage.alt} />
                </figure>
                <div className="blog-single-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <header className="entry-header blog-single-header" data-parallax="true" data-parallax-to="{ &quot;opacity&quot;: 0, &quot;translateY&quot;: &quot;30%&quot; }" data-parallax-options="{ &quot;triggerHook&quot;: &quot;0.3&quot; }">
                                    <h1 className="blog-single-title entry-title h2" data-split-text="true" data-split-options="{ &quot;type&quot;: &quot;lines&quot; }">
                                        {post.title}
                                    </h1>
                                    <div className="post-meta">
                                        <figure className="pull-left pr-2">
                                            <img className="img-circle" src={post.author.picture.url} alt={post.author.picture.alt} width="44px" />
                                        </figure>
                                        <span className="byline">
                                            <span className="block text-uppercase ltr-sp-1">Autor:</span>
                                            <span className="author vcard">
                                                <a className="url fn n" href="#">{post.author.name}</a>
                                            </span>
                                        </span>
                                        <span className="posted-on">
                                            <span className="block text-uppercase ltr-sp-1">Publicado el:</span>
                                            <a href="#" rel="bookmark">
                                                <time className="entry-date published updated" dateTime={publicationDate.toUTCString()}>{post.publicationDate.toString()}</time>
                                            </a>
                                        </span>
                                        <span className="cat-links">
                                            <span className="block text-uppercase ltr-sp-1">Categoría:</span>
                                            <a href="#" rel="category tag">Negocios</a>
                                        </span>
                                    </div>{/* /.post-meta */}
                                </header>{/* /.blog-single-header */}
                            </div>{/* /.col-md-6 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>{/* /.blog-single-details */}
            </div>{/* /.blog-single-cover */}
            <article className="blog-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="blog-single-content entry-content pull-up expanded">
                                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                            </div>{/* /.blog-single-content entry-content */}
                            <footer className="blog-single-footer entry-footer">
                                <span className="tags-links">
                                    {
                                        Array.isArray(post.tags) &&
                                        post.tags.map(tag => <a href={`/blog/tag/${tag.slug}`} rel="tag">{tag.tag}</a>)
                                    }
                                </span>
                                <span className="share-links">
                                    <span className="text-uppercase ltr-sp-1">Compartir en:</span>
                                    <ul className="social-icon circle branded social-icon-sm">
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-google" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>{/* /.social-icon */}
                                </span>{/* /.share-links */}
                            </footer>{/* /.blog-single-footer entry-footer */}
                            <div className="post-author">
                                <figure>
                                    <img src={post.author.picture.url} alt={post.author.picture.alt} width="70px" />
                                </figure>
                                <div className="post-author-info clearfix">
                                    <h3><a href="#">{post.author.name}</a></h3>
                                    <h6>Editor</h6>
                                    <p>{post.author.bio}</p>
                                </div>{/* /.post-author-info */}
                            </div>{/* /.post-author */}
                            <nav className="post-nav">
                                <div className="nav-previous">
                                    <a href="#" rel="prev">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" stroke="#444" strokeWidth={2} x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width={24} height={24}>
                                            <g>
                                                <line strokeMiterlimit={10} x1={22} y1={12} x2={2} y2={12} strokeLinejoin="miter" strokeLinecap="butt" />
                                                <polyline strokeLinecap="square" strokeMiterlimit={10} points="9,19 2,12 9,5 " strokeLinejoin="miter" />
                                            </g>
                                        </svg>
                                        <span className="screen-reader-text">Previous Article</span>
                                        <span aria-hidden="true" className="nav-subtitle">Previous Article</span>
                                        <span className="nav-title">Compare prices find the best computer accessory</span>
                                    </a>
                                </div>
                                <div className="nav-next">
                                    <a href="#" rel="next">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" stroke="#444" strokeWidth={2} x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width={24} height={24}>
                                            <g transform="rotate(180 12,12) ">
                                                <line strokeMiterlimit={10} x1={22} y1={12} x2={2} y2={12} strokeLinejoin="miter" strokeLinecap="butt" />
                                                <polyline strokeLinecap="square" strokeMiterlimit={10} points="9,19 2,12 9,5 " strokeLinejoin="miter" />
                                            </g>
                                        </svg>
                                        <span className="screen-reader-text">Next Article</span>
                                        <span aria-hidden="true" className="nav-subtitle">Next Article</span>
                                        <span className="nav-title">Enhance wellness by doing something different!</span>
                                    </a>
                                </div>
                            </nav>{/* /.post-nav */}
                        </div>{/* /.col-md-8 */}
                    </div>{/* /.row */}
                </div>{/* /.comment-form */}
            </article>{/* /.blog-single */}
        </PageLayout>
    )
}

const POST_QUERY = `query {
    post {
        title
        seo {
            title,
            description,
            image {
                url
            }
        }
        coverImage {
            url
            alt
            author
        }
        title
        publicationDate
        tags {
            tag
            slug
        }
        content
        author {
            name
            bio
            picture {
                url
                alt
            }
        }
    }
}`

BlogPostPage.getInitialProps = async (): Promise<any> => {
    const cms = new DatoCMSService();
    const result = await cms.executeQuery({ query: POST_QUERY });
    return result;
}

export default BlogPostPage;