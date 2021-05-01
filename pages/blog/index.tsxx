import { NextPage } from 'next';
import PageLayout from '../../component/layout/PageLayout';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';
import i18n from '../../i18n';
import { IImage } from '../../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../../lib/services/cms/dato-cms.service';
import { ISEO } from '../../lib/types/cms/models/common/seo.interface';
import { WithTranslation } from 'next-i18next';
import { getRequestLanguage } from '../../lib/language';
import { IBlogPost } from '../../lib/types/cms/models/blog/post.model';
import HeaderAlternativeTransparent from '../../component/layout/HeaderAlternativeTransparent';
import SignupBlog from '../../component/blog/SignupBlog';
import { IBlogCategory } from '../../lib/types/cms/models/blog/category.model';
import BlogPostListItem from '../../component/blog/BlogPostListItem';
import BlogSidebar from '../../component/blog/BlogSidebar';

interface Props extends ILayoutPageProps, WithTranslation {
    allPosts: IBlogPost[];
    allPostCategories: IBlogCategory[];
    blogPage: {
        seo: ISEO;
        title: string;
        headerImage: IImage;
    }
}

const Page: NextPage<Props> = ({ t, allPosts, blogPage, allPostCategories, lang }) => {
    const posts = allPosts || [];
    return (
        <PageLayout lang={lang} url="/crm" seo={blogPage.seo} hideMainHeader={true}>
            <div className="titlebar titlebar-sm scheme-light text-left pb-60 mb-60" data-parallax="true" data-parallax-options='{ "parallaxBG": true }' style={{ backgroundImage: `url(${blogPage.headerImage.url});` }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <HeaderAlternativeTransparent />
                <div className="titlebar-inner">
                    <div className="container titlebar-container">
                        <div className="row titlebar-container">
                            <div className="titlebar-col col-md-12">
                                <h1 data-fittext="true" data-fittext-options="{ &quot;maxFontSize&quot;: 80, &quot;minFontSize&quot;: 32 }">Blog</h1>
                                <p className="text-white text-font-20">{blogPage.title}</p>
                                <a className="titlebar-scroll-link" href="#content" data-localscroll="true"><i className="fa fa-angle-down" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="content">
                <div className="container">
                    <div className="row">

                        {/* POSTS LISTS */}
                        <div className="col-md-8">
                            <div className="liquid-blog-posts">
                                <div className="liquid-blog-grid liquid-blog-style-classic row">
                                    {
                                        posts && posts.length > 0 && posts.map(post => <BlogPostListItem key={post.id} post={post} />)
                                    }
                                </div>
                            </div>
                        </div>
                        
                        {/* SIDEBAR */}
                        <div className="col-md-3 col-md-offset-1 sidebar-container">
                            <BlogSidebar allPostCategories={allPostCategories} /> 
                        </div>
                    </div>
                </div>
            </main>
        </PageLayout>)
}

const POST_QUERY = (lang: string) => `query {
    blogPage {
        title
        seo {
            title
            description
        }
        headerImage {
            url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 1920, h: 725})
            alt
        }
    }
    allPostCategories(locale: ${lang}) {
        id
        title
        slug
    }
    allPosts(locale: ${lang}) {
        id
        slug
        title
        intro
        coverImage {
            url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 770 , h: 440})
            alt
        }
    }
}`;

Page.getInitialProps = async ({ req }): Promise<any> => {
    const lang = getRequestLanguage(req, i18n.i18n);
    const cms = new DatoCMSService();
    const result = await cms.executeQuery<any>({ query: POST_QUERY(lang) });
    return {
        ...result,
        lang,
        namespacesRequired: ['common', 'header', 'footer']
    };
}

export default i18n.withTranslation('common')(Page);