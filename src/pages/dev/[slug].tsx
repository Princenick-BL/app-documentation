import Layout from '@/layouts/BaseLayout'
import { PageSection, getPageSection } from '@/utils/post-utils'
import React from 'react'
import styles from './index.module.scss'
import { pages } from '@/services/pages'
import 'highlight.js/scss/base16/colors.scss'; // Choose a theme from the highlight.js styles folder

type Props = {
    slug?:string,
    page?: PageSection[]
}

export default function DocumentationPage({slug,page}: Props) {
  return (
    <Layout title='Documentation' aside={slug}>
        <div className={styles.documentation}>
            {page?.map((section:PageSection,i)=>(
                <div key={i}>{getPageSection(section)}</div>
                
            ))}
        </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }:{params:any}) => {
    // Fetch data based on the slug
    const pageContent = pages[params?.slug as string];

    if (!pageContent) {
        return {
            notFound: true,
        };
    }

    return {
        props: { 
            slug :params?.slug,
            page :pageContent
        },
    };
};
