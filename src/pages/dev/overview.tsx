import Layout from '@/layouts/BaseLayout'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { pages } from '@/services/pages'
import { PageSection, getPageSection } from '@/utils/post-utils'

type Props = {
  page?: PageSection[]
}

export default function DocuùentationOverview({page}: Props) {

  const services = [
    {
      title : "Speech to text",
      description : "Automatically create .srt or .ass file from audio file or just get the text.",
      bg : "linear-gradient(5deg, rgba(34,193,195,1) 0%, rgba(85,204,70,1) 18%, rgba(96,212,149,1) 31%, rgba(135,224,119,1) 51%, rgba(161,232,100,1) 64%, rgba(186,239,80,1) 77%, rgba(232,253,45,0.895331374737395) 100%)",
      slug : "/documentation/speech-to-text"
    },
    {
      title : "Text summary",
      description : "Try out our large trained text summary model.",
      bg : "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      slug : "/documentation/text-summary"
    },
    {
      title : "Article to video",
      description : "Start with an url and then get a video in few line of code or few click.",
      bg : "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      slug : "/documentation/article-to-video"
    },
    {
      title : "Image to video",
      description : "Bring your static image to live .",
      bg : "linear-gradient(164deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      slug : "/documentation/image-to-video"
    }
  ]

  return (
    <Layout title='Documentation' aside='Overview'>
        <div className={styles.documentation}>
            <h1>Welcome to the OpenAI developer platform</h1>
            <div className={styles.sectionFeatured}>
                <label>Featured APIs<Link className={styles.link} href={"/services"}>See all &#129170;</Link></label>
                <div className={styles.sectionFeaturedItems}>
                  {services?.map((service,i)=>(
                    <Link key={i} href={service.slug} className={styles.sectionFeaturedItem} style={{background:`${service.bg}`}}>
                      <div className={styles.sectionFeaturedItemCalc}>
                        <div>{service.description}</div>
                        <div className={styles.sectionFeaturedItemTitle}>{service.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
            </div>
            <div className={styles.presentation}>
              {page && page?.map((section:PageSection,i)=>(
                <div key={i}>
                  { getPageSection(section)}
                </div>
              ))}
            </div>
        </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }:{params:any}) => {
  // Fetch data based on the slug
  const pageContent = pages["overview"];

  return {
      props: { 
          page :pageContent
      },
  };
};