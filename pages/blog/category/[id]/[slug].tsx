import { NextPage } from 'next';
import PageLayout from '../../../../component/layout/PageLayout';
import { DatoCMSService } from '../../../../lib/services/cms/dato-cms.service';
import { ILayoutPageProps } from '../../../../lib/types/landing-page-props.interface';
import { IBlogPost } from '../../../../lib/types/cms/models/blog/post.model';
import { IBlogCategory } from '../../../../lib/types/cms/models/blog/category.model';
import HeaderAlternativeTransparent from '../../../../component/layout/HeaderAlternativeTransparent';
import BlogPostListItem from '../../../../component/blog/BlogPostListItem';
import BlogSidebar from '../../../../component/blog/BlogSidebar';

interface Props extends ILayoutPageProps {
    allPosts: IBlogPost[];
    postCategory: IBlogCategory;
    allPostCategories: IBlogCategory[]
}

const CategoryPostPage: NextPage<Props> = ({ allPosts, postCategory, allPostCategories }) => {
    return (
        <PageLayout 
        hideMainHeader={true}
        seo={{
            description: "Nuestro blog para la comunidad de Cabana Data Software",
            image: null,
            title: "Cabana Data Software | Blog"
        }} url='/blog'>
            <div className="titlebar titlebar-sm scheme-light text-left pb-60 mb-60" data-parallax="true" data-parallax-options='{ "parallaxBG": true }' style={{ backgroundImage: `url(${postCategory.coverImage.url})` }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <HeaderAlternativeTransparent />
                <div className="titlebar-inner">
                    <div className="container titlebar-container">
                        <div className="row titlebar-container">
                            <div className="titlebar-col col-md-12">
                                <h1 data-fittext="true" data-fittext-options="{ &quot;maxFontSize&quot;: 80, &quot;minFontSize&quot;: 32 }">{postCategory.title}</h1>
                                <p className="text-white text-font-20">{postCategory.title}</p>
                                <a className="titlebar-scroll-link" href="#content" data-localscroll="true"><i className="fa fa-angle-down" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="liquid-blog-posts">
                            <div className="liquid-blog-grid liquid-blog-style-classic row">
                                { 
                                    allPosts && allPosts.length > 0 && allPosts.map(post => <BlogPostListItem post={post} />)
                                }
                            </div>{/* /.liquid-blog-grid liquid-blog-style-classic row */}
                        </div>{/* /.liquid-blog-posts */}
                    </div>{/* /.col-md-8 */}
                    <div className="col-md-3 col-md-offset-1 sidebar-container">
                        <BlogSidebar allPostCategories={allPostCategories} /> 
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
            url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 770 , h: 440})
            alt
            author
        }
    }
    postCategory {
        id
        title
        slug
        coverImage {
            url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 1920 , h: 960})
            alt
        }
    }
    allPostCategories {
        id
        title
        slug
    }
}`

CategoryPostPage.getInitialProps = async ({ query }): Promise<any> => {
    const cms = new DatoCMSService();
    const categoryId = query.id as string;
    const result = await cms.executeQuery({ query: POST_QUERY(categoryId) });
    return result;
}

export default CategoryPostPage;