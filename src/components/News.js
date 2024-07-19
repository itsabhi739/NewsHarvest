import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import SmallCards from './smallCards/SmallCards'
import "./smallCards/SmallCards.css"
import HeroSection from './HeroSection/HeroSection';
export default class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize : 8
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

 articles = [{
    "source": { "id": null, "name": "WANE" },
    "author": "The Associated Press",
    "title": "Ex-IRS contractor who leaked tax return information of Trump, rich people gets five years in prison - WANE",
    "description": "A former contractor for the Internal Revenue Service who pleaded guilty to leaking tax information to news outlets about former President Donald Trump and thousands of the country’s wealthiest people was sentenced to five years in prison Monday.",
    "url": "https://www.wane.com/news/ex-irs-contractor-who-leaked-tax-return-information-of-trump-rich-people-gets-five-years-in-prison/",
    "urlToImage": "https://www.wane.com/wp-content/uploads/sites/21/2024/01/Trump-speech.jpg?w=1280",
    "publishedAt": "2024-01-29T18:43:16Z",
    "content": "WASHINGTON (AP) A former contractor for the Internal Revenue Service who pleaded guilty to leaking tax information to news outlets about former President Donald Trump and thousands of the countrys we… [+2814 chars]"
  },
  {
    "source": { "id": "usa-today", "name": "USA Today" },
    "author": "Christine Brennan",
    "title": "Russian skater Kamila Valieva banned four years over doping, ending 2022 Olympic drama - USA TODAY",
    "description": "Monday's ruling means the International Skating Union will now be called upon to decide the results of the 2022 team figure skating competition.",
    "url": "https://www.usatoday.com/story/sports/olympics/2024/01/29/kamila-valieva-russian-skater-banned-four-years-doping-beijing-olympics/72393824007/",
    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/29/USAT/72393677007-sadkamila.jpg?crop=3807,2141,x0,y85&width=3200&height=1800&format=pjpg&auto=webp",
    "publishedAt": "2024-01-29T18:22:30Z",
    "content": "In a stunning rebuke of Russias notorious doping system, the Court of Arbitration for Sport banned Russian Olympic figure skater Kamila Valieva Monday morning for four years and said her 2022 Olympic… [+5050 chars]"
  },
  {
    "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
    "author": "Al Jazeera",
    "title": "South Africa’s ANC suspends former President Jacob Zuma - Al Jazeera English",
    "description": "The suspension of the former South African President comes ahead of the country’s general elections.",
    "url": "https://www.aljazeera.com/news/2024/1/29/south-africas-anc-suspends-former-president-jacob-zuma",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/07/2021-07-19T102913Z_1481264011_RC2MNO9157T7_RTRMADP_3_SAFRICA-ZUMA-e1626693221788.jpg?resize=1920%2C1440",
    "publishedAt": "2024-01-29T17:50:48Z",
    "content": "South Africas ruling African National Congress (ANC) has suspended former President Jacob Zuma, weeks after he backed another party ahead of this years general election.\r\nZuma and others whose conduc… [+1453 chars]"
  },
  {
    "source": { "id": null, "name": "YouTube" },
    "author": null,
    "title": "China's Real Estate Giant Evergrande to be Liquidated in Hong Kong | Vantage with Palki Sharma - Firstpost",
    "description": "China's Real Estate Giant Evergrande to be Liquidated in Hong Kong | Vantage with Palki Sharma A court in Hong Kong has ordered the liquidation of China's de...",
    "url": "https://www.youtube.com/watch?v=__0eFcJ8LVs",
    "urlToImage": "https://i.ytimg.com/vi/__0eFcJ8LVs/maxresdefault.jpg",
    "publishedAt": "2024-01-29T17:20:00Z",
    "content": null
  }]

    constructor()
    {
        super();
        this.state = {
            articles : this.articles, 
            loading : false,
            page:1,
        }
       
    }

     async componentDidMount()
    {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4f2093ad0674354800d8e9e4348a940&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data  = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json().then((data)=>
      {
        this.setState({
          articles : data.articles,            
          totalResults : data.totalResults,
          loading: false
     });
      });
      this.props.setProgress(100);
    }

     HandlePrevClick = async()=>
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4f2093ad0674354800d8e9e4348a940&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data  = await fetch(url);
      let parsedData = await data.json().then((data)=>
      {
        
        this.setState ({
          page : this.state.page-1,
          articles : data.articles ,
          loading:false,
        })
      })
    }

    HandleNextClick = async()=>
    {
      if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
      {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4f2093ad0674354800d8e9e4348a940&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data  = await fetch(url);
        let parsedData = await data.json().then((data)=>
        {
          this.setState ({
            page : this.state.page +1,
            articles : data.articles ,
            loading: false,
          })
          
        });
      }
    }
   
     capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
   
    return (
      <>
       <HeroSection/>
    <div className="container my-3"  >
      {/* <marquee behavior="scroll" direction="left" style = {{marginTop : '180px'}}>Welcome to the NewsHarvest - Access and grow with all the news </marquee> */}
        <h2 className='my-3 text-center' >{`NewsHarvest ${this.capitalizeFirstLetter(this.props.category)}`}- Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="container my-3">
          </div>
      <div className="row my-3">
        { (!this.state.loading) && this.state.articles.map((elements, index)=>(
        
          <div className="col-md-4 my-3" key={index}>
          <NewsItem key  = {index} title = {elements.title?elements.title.slice(0,45):""} description = {elements.description?elements.description.slice(0,125):""} imageUrl = {elements.urlToImage} url = {elements.url}
          author = {elements.author} publishedAt = {elements.publishedAt} source = {elements.source.name}/>
          </div>
        ))  
        }
        </div>
    </div>
    <div className="container d-flex justify-content-between my-3" >
    <button disabled ={this.state.page<=1} type="button" className="btn" onClick={this.HandlePrevClick} style={{backgroundColor:'black',
          color:"white"}}>Previous &#x2190;</button>
    <button  disabled ={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn" onClick={this.HandleNextClick} style={{backgroundColor:'black',
          color:"white"}}>Next  &rarr; </button>
    </div>
    <div className="HText"><h1>Most Recent News</h1></div>
    <div className="row my-3" style={{display:"flex" , flexDirection:'row'}}>
        { (!this.state.loading) && this.state.articles.slice(0,6).map((elements, index)=>(
          <div className="col-md-4 my-3 ml-04" key={index}>
          <SmallCards key  = {index} title = {elements.title?elements.title.slice(0,45):""} description = {elements.description?elements.description.slice(0,88):"Description Not Avalaible kindly click below to read the whole news"} url = {elements.url}/>
          </div>
        ))  
        }
        </div>
      </>

      // disabled ={this.state.page<=1}
    )
  }
}
