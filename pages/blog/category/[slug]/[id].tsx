import { NextPage } from 'next';
import PageLayout from '../../../../component/layout/PageLayout';
import { DatoCMSService } from '../../../../lib/services/cms/dato-cms.service';
import { ILayoutPageProps } from '../../../../lib/types/landing-page-props.interface';
import { IBlogPost } from '../../../../lib/types/cms/models/blog/post.model';
import { IBlogCategory } from '../../../../lib/types/cms/models/blog/category.model';
import HeaderAlternative from '../../../../component/layout/HeaderAlternative';

interface Props extends ILayoutPageProps {
    allPosts: IBlogPost[];
    postCategory: IBlogCategory;
}

const CategoryPostPage: NextPage<Props> = ({ allPosts, postCategory }) => {
    return (
        <PageLayout 
        hideMainHeader={true}
        seo={{
            description: "Nuestro blog para la comunidad de Cabana Data Software",
            image: null,
            title: "Cabana Data Software | Blog"
        }} url='/blog'>
            <HeaderAlternative title={postCategory.title} titlebarBackgroundImage={postCategory.coverImage.url} />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="liquid-blog-posts">
                            <div className="liquid-blog-grid liquid-blog-style-classic row">
                                <div className="col-md-12">
                                    <article className="liquid-lp liquid-blog-item liquid-blog-item-grid liquid-blog-scheme-dark mb-50">
                                        <figure className="liquid-lp-media">
                                            <a href="#">
                                                <img src={postCategory.coverImage.url} alt={postCategory.coverImage.alt} />
                                            </a>
                                        </figure>
                                        <div className="liquid-blog-item-inner">
                                            <a href="#" className="liquid-overlay-link">{postCategory.title}</a>
                                            <header className="liquid-lp-header">
                                                <h2 className="liquid-lp-title font-weight-bold h3 size-sm">
                                                    <a href="#" data-split-text="text" data-split-options="{ &quot;type&quot;: &quot;lines&quot; }">Business meeting 2017 in San Francisco</a>
                                                </h2>
                                                <div className="liquid-lp-details">
                                                    <time className="liquid-lp-date" dateTime="2017-09-25">5 hours ago</time>
                    in
                    <ul className="liquid-lp-category">
                                                        <li><a href="#">Business</a></li>
                                                    </ul>
                                                </div>{/* /.liquid-lp-details */}
                                            </header>
                                            <div className="liquid-lp-excerpt">
                                                <p>One of my favourite things I like to watch is the bloopers and outtakes that are shown of mistakes made during the making of a movie.</p>
                                            </div>{/* /.latest-post-excerptc */}
                                            <footer className="liquid-lp-footer">
                                                <a href="#" className="btn btn-naked text-uppercase ltr-sp-1 size-sm font-weight-bold liquid-lp-read-more">
                                                    <span>
                                                        <span className="btn-line btn-line-before" />
                                                        <span className="btn-txt">Continue Reading</span>
                                                        <span className="btn-line btn-line-after" />
                                                    </span>
                                                </a>
                                            </footer>
                                        </div>{/* /.liquid-blog-item-inner */}
                                    </article>
                                </div>{/* /.col-md-12 */}
                            </div>{/* /.liquid-blog-grid liquid-blog-style-classic row */}
                        </div>{/* /.liquid-blog-posts */}
                    </div>{/* /.col-md-8 */}
                    <div className="col-md-3 col-md-offset-1 sidebar-container">
                        <aside className="main-sidebar">
                            <div className="widget widget_search">
                                <form role="search" method="get" className="search-form" action="#">
                                    <label>
                                        <span className="screen-reader-text">Search for:</span>
                                        <input type="search" className="search-field" placeholder="Search …" name="s" />
                                    </label>
                                    <input type="submit" className="search-submit" defaultValue="Search" />
                                </form>
                            </div>{/* /.widget_search */}
                            <div className="widget widget_categories">
                                <h3 className="widget-title">Categories</h3>
                                <ul>
                                    <li><a href="#">Beauty</a> (2) </li>
                                    <li><a href="#">Business</a> (2) </li>
                                    <li><a href="#">Carousel</a> (4) </li>
                                    <li><a href="#">Classic</a> (5) </li>
                                    <li><a href="#">Featured</a> (1) </li>
                                    <li><a href="#">Food &amp; Drink</a> (1)
            </li>
                                    <li><a href="#">Grid</a> (12) </li>
                                    <li><a href="#">Main New</a> (3) </li>
                                    <li><a href="#">Masonry</a> (16) </li>
                                    <li><a href="#">Masonry Alt</a> (10)
            </li>
                                    <li><a href="#">Motivation</a> (2) </li>
                                    <li><a href="#">Split</a> (5) </li>
                                    <li><a href="#">Travel</a> (2) </li>
                                </ul>
                            </div>{/* /.widget_categories */}
                            <div className="widget widget_media_image">
                                <a href="#">
                                    <img src="./assets/demo/misc/sponsored-min.jpg" alt="Sponsoreds" />
                                </a>
                            </div>{/* /.widget_media_image */}
                        </aside>
                    </div>{/* /.col-md-3 col-md-offset-1 sidebar-container */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </PageLayout>
    )
}

const POST_QUERY = (id: string) => `query {
    allPosts(filter: {category: {eq: "${id}"}}) {
        title
        coverImage {
            url
            alt
            author
        }
    }
    postCategory {
        id
        title
        slug
        coverImage {
            url 
            alt
        }
    }
}`

CategoryPostPage.getInitialProps = async ({ query }): Promise<any> => {
    const cms = new DatoCMSService();
    const categoryId = query.id as string;
    const result = await cms.executeQuery({ query: POST_QUERY(categoryId) });
    return result;
}

export default CategoryPostPage;