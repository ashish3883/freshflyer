import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'

const News = (props) => {
    
    // let allNews = [
    //     {
    //         "article_id": "5a8f4db18bb9916304c6b0c4670d27bd",
    //         "title": "EU weighs response to Russian 'interference' in election runup",
    //         "link": "https://www.newsr.in/n/World/1zqv6hw7kw/EU-weighs-response-to-Russian-interference-in-election.htm",
    //         "keywords": [
    //             "world"
    //         ],
    //         "creator": null,
    //         "video_url": null,
    //         "description": "EU leaders on Wednesday weighed a response to suspicions of Russian meddling ahead of June elections in the bloc, with several states pushing for sanctions targeting \"malign activities\" by Moscow. The prime ministers of Belgium and the Czech Republic, Alexander De Croo and Petr Fiala, had ... Reported by IndiaTimes 10 minutes ago.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:50:22",
    //         "image_url": null,
    //         "source_id": "newsr",
    //         "source_priority": 29095901,
    //         "source_url": "https://www.newsr.in",
    //         "source_icon": "https://i.bytvi.com/domain_icons/newsr.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "world"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "d4d8e61af0d21518f50964452debda2c",
    //         "title": "World News | US Continues to Stress Importance of De-escalation Amid Rising Tensions Between Iran and Israel",
    //         "link": "https://www.latestly.com/agency-news/world-news-us-continues-to-stress-importance-of-de-escalation-amid-rising-tensions-between-iran-and-israel-5901997.html",
    //         "keywords": null,
    //         "creator": null,
    //         "video_url": null,
    //         "description": "Get latest articles and stories on World at LatestLY. The US has emphasised the importance of avoiding further escalation and working with partners in the region and around the world to create a \"unified diplomatic\" response to Iran's \"reckless and irresponsible behaviour.\"",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:50:22",
    //         "image_url": "https://st1.latestly.com/wp-content/uploads/2024/04/ANI-20240418002331-380x214.jpg",
    //         "source_id": "latestly",
    //         "source_priority": 5523,
    //         "source_url": "https://www.latestly.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/latestly.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "top"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "2e8e0a0945808761109ba6f66050f635",
    //         "title": "NBFCs' Q4 profit may surge 15% on strong loan growth, asset quality",
    //         "link": "https://economictimes.indiatimes.com/markets/stocks/earnings/nbfcs-q4-profit-may-surge-15-on-strong-loan-growth-asset-quality/articleshow/109386612.cms",
    //         "keywords": null,
    //         "creator": null,
    //         "video_url": null,
    //         "description": "The full impact of the Reserve Bank of India's (RBI) increase in risk weights on consumer credit for banks and NBFCs, which was announced in November last year, is also likely to be felt this quarter impacting profitability and growth for small-ticket loans for personal consumption.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:50:12",
    //         "image_url": "https://img.etimg.com/thumb/msid-109386622,width-210,height-158,imgsize-1935212,resizemode-75/nbfc-rep.jpg",
    //         "source_id": "economictimes_indiatimes",
    //         "source_priority": 376,
    //         "source_url": "https://economictimes.indiatimes.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/economictimes_indiatimes.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "top"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "38a97576634147daae1941c00f9bfef6",
    //         "title": "Driver injured along Imphal-Jiribam section",
    //         "link": "https://thehillstimes.in/northeast/driver-injured-along-imphal-jiribam-section",
    //         "keywords": [
    //             "northeast"
    //         ],
    //         "creator": [
    //             "The Hills Times"
    //         ],
    //         "video_url": null,
    //         "description": "IMPHAL, April 17: A driver was injured after he was hit by bullets fired by armed miscreants towards Imphal-bound oil tankers and loaded trucks along Imphal-Jiribam section of NH-37 in Tamenglong district on Tuesday, damaging some oil tankers including a bullet tanker (bulk LPG carrier). Hours after the attack, panic buyers stormed at petrol retail […]",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:50:01",
    //         "image_url": "https://thehillstimes.in/wp-content/uploads/2024/04/Driver-injured.jpg",
    //         "source_id": "thehillstimes",
    //         "source_priority": 4168182,
    //         "source_url": "https://thehillstimes.in",
    //         "source_icon": "https://i.bytvi.com/domain_icons/thehillstimes.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "top"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "24e82b1928f4afdfe6f722c3b9f8fd38",
    //         "title": "Candidates 2024 Points Table: Nepomniachtchi in sole lead; Nakamura, Gukesh joint second; Humpy joint third in women’s after round 11",
    //         "link": "https://sportstar.thehindu.com/chess/fide-candidates-2024-points-table-round-11-day-eleven-gukesh-praggnanandhaa-vidit-nepomniachtchi-standings-chess-news/article68076382.ece",
    //         "keywords": [
    //             "chess"
    //         ],
    //         "creator": null,
    //         "video_url": null,
    //         "description": "FIDE Candidates 2024: Russia’s Ian Nepomniachtchi ascended to become the sole leader of the marquee tournament after beating Vidit Gujrathi with black pieces.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:49:03",
    //         "image_url": "https://ss-i.thgim.com/public/incoming/4nl7yc/article68078279.ece/alternates/LANDSCAPE_1200/53661030423_f34cc54d5a_o.jpg",
    //         "source_id": "sportstar",
    //         "source_priority": 2972,
    //         "source_url": "https://sportstar.thehindu.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/sportstar.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "sports"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "cd4c37971a57cf482bfd62d4c174ea9e",
    //         "title": "Hardik Pandya 'automatic selection' but Rinku Singh's T20 World Cup spot shockingly in danger: Report",
    //         "link": "https://www.hindustantimes.com/cricket/hardik-pandya-automatic-selection-but-rinku-singhs-t20-world-cup-spot-shockingly-in-danger-report-101713377524534.html",
    //         "keywords": [
    //             "cricket"
    //         ],
    //         "creator": null,
    //         "video_url": null,
    //         "description": "It could be a possibility that Rinku Singh may miss out on a spot in India's final 15 for the T20 World Cup while Hardik Pandya's spot is not under threat.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:48:39",
    //         "image_url": "https://www.hindustantimes.com/ht-img/img/2024/04/17/1600x900/PTI03-28-2024-000191A-0_1713381181116_1713381209083.jpg",
    //         "source_id": "hindustantimes",
    //         "source_priority": 933,
    //         "source_url": "http://www.hindustantimes.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/hindustantimes.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "sports"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "769819dfaf484be5c8163b5c15c7f97e",
    //         "title": "India News | Mangaluru: World Konkani Centre Spearheads Language Conservation Efforts, Calls for Government Support",
    //         "link": "https://www.latestly.com/agency-news/india-news-mangaluru-world-konkani-centre-spearheads-language-conservation-efforts-calls-for-government-support-5901995.html",
    //         "keywords": null,
    //         "creator": null,
    //         "video_url": null,
    //         "description": "Get latest articles and stories on India at LatestLY. The World Konkani Centre in Mangaluru is focused on preserving the endangered Konkani language, which is at risk of becoming extinct over time. Since 2009, the Konkani-speaking community has been striving to rejuvenate their traditional language and encourage the next generation to speak and write Konkani.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:48:27",
    //         "image_url": "https://st1.latestly.com/wp-content/uploads/2024/04/ANI-20240418000951-380x214.jpg",
    //         "source_id": "latestly",
    //         "source_priority": 5523,
    //         "source_url": "https://www.latestly.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/latestly.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "top"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "bc664a2e26dbc8cd2bf7cbbfc0306f0e",
    //         "title": "PSEB 10th Result 2024 LIVE: Punjab Board Class 10th Matric Result at pseb.ac.in Today; Direct Link",
    //         "link": "https://www.india.com/education/pseb-10th-result-2024-live-punjab-board-class-10th-matric-result-at-pseb-ac-in-today-direct-link-6867483/",
    //         "keywords": [
    //             "exams & results",
    //             "board result",
    //             "pseb 10th result 2024",
    //             "punjab board"
    //         ],
    //         "creator": null,
    //         "video_url": null,
    //         "description": "PSEB 10th Result 2024 LIVE: The Punjab Board PSEB Class 10th Result 2024 at https://pseb.ac.in/ and punjab.indiaresults.com.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:48:11",
    //         "image_url": "https://static.india.com/wp-content/themes/icom/images/default-big.svg",
    //         "source_id": "india",
    //         "source_priority": 8067,
    //         "source_url": "https://www.india.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/india.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "education"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "bb84ecc702eb92260d5d6463ececde95",
    //         "title": "3 Children Drown While Bathing In Delhi Canal",
    //         "link": "https://www.india.com/news/india/3-children-drown-while-bathing-in-munak-canal-delhi-news-crime-6867490/",
    //         "keywords": [
    //             "india",
    //             "children drowned",
    //             "delhi canal",
    //             "drowned",
    //             "munak canal"
    //         ],
    //         "creator": null,
    //         "video_url": null,
    //         "description": "Three children drowned while bathing in Delhi’s Munak canal on Wednesday. The incident took place near the Haiderpur water treatment plant in Delhi's Rohini area.",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:47:16",
    //         "image_url": "https://static.india.com/wp-content/themes/icom/images/default-big.svg",
    //         "source_id": "india",
    //         "source_priority": 8067,
    //         "source_url": "https://www.india.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/india.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "other"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     },
    //     {
    //         "article_id": "3717fc931ca842b1e944526c57eaed2b",
    //         "title": "Delhi Capitals bundle out GT for 89 as bowlers come to party, finally",
    //         "link": "https://english.mathrubhumi.com/special-pages/ipl-2024/delhi-capitals-bundle-out-gujarat-titans-for-89-as-bowlers-come-to-party-1.9493345",
    //         "keywords": null,
    //         "creator": null,
    //         "video_url": null,
    //         "description": "Ahmedabad: Delhi Capitals bundled out Gujarat Titans for 89 in their Indian Premier League match here on Wednesday, the bowlers finally having a say after ...",
    //         "content": "ONLY AVAILABLE IN PAID PLANS",
    //         "pubDate": "2024-04-18 00:47:00",
    //         "image_url": "https://english.mathrubhumi.com/image/contentid/policy:1.9493346:1713401300/AFP_34PN2HQ.jpg?$p=63d847e&f=16x10&w=852&q=0.8",
    //         "source_id": "mathrubhumi",
    //         "source_priority": 29098,
    //         "source_url": "https://english.mathrubhumi.com",
    //         "source_icon": "https://i.bytvi.com/domain_icons/mathrubhumi.png",
    //         "language": "english",
    //         "country": [
    //             "india"
    //         ],
    //         "category": [
    //             "top"
    //         ],
    //         "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //         "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
    //     }
    // ]
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    // let nextPage;
    // let prevPage = null;
    const [articles, setArticles] = useState([]);
    // const [page, setPage] = useState({})

    const updateNews = async()=>{
        const url = `https://newsdata.io/api/1/news?apikey=pub_4204096f4bf58f52429d980e402fd55613a60&country=${props.country}&language=en&category=${props.category}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.results)
        // nextPage = parsedData.nextPage
    }
    useEffect(() => {
        document.title = `FreshFlyer - Top ${capitalize(props.category) === 'Top' ? "" : capitalize(props.category)} News`;
        updateNews()
        // eslint-disable-next-line
    },[])
    
    // const handleNext=()=>{
    //     setPage({
    //         page: nextPage,
    //         prevPage: nextPage
    //     })
    // }
    // console.log(page)
    return (
        <>
            <h1 className="display-3 text-center"><strong> FreshFlyer - Top {capitalize(props.category) === 'Top' ? "" : capitalize(props.category)} Headlines</strong></h1>
            <div className="container">
                <div className="row">
                    {Array.from(articles).map((el) => {
                        return(
                            <div className="col-md-6" key={el.article_id}>
                            <Newscard
                                title={el.title}
                                description={el.description}
                                url={el.link}
                                image={el.image_url}
                                source={el.source_id}
                                icon= {el.source_icon}
                                category={el.category}
                                creater={el.creator}
                                date={el.pubDate}
                            />
                            </div>
                        )
                })}
                </div>
                {/* <nav aria-label="..." className=''>
                    <ul className="pagination d-flex justify-content-between">
                        <li className="page-item">
                            <a href='#' className="page-link">Previous</a>
                        </li>
                    
                        <li href='#' className="page-item">
                            <a className="page-link" >Next</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </>
    )
}

export default News
