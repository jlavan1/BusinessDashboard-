import React, { Component } from 'react';
import axios from 'axios'
import { Button ,Carousel} from 'react-bootstrap'

import './news.css'
export default class news extends Component {
  constructor(props) {
    super(props);
    this.state = {
        info:''
    };
  }



  Info(){
    const apiKey = "7f830f70a9b541b9bb7957578e96b91c";
      
    
    axios.get('http://newsapi.org/v2/top-headlines?sources='+this.props.select+'&apiKey='+apiKey)
    .then(({data})=>{
        // console.log(data)
    this.setState({info:data})
    })
}



  render() {
      console.log(this.props.select)
      console.log(this.state.info)
      const news=this.state.info
      console.log(news)
    return (
   <div>
       <Button variant="primary" size="sm" active onClick={(e)=>this.Info(e)}>
    Select News
  </Button>{' '}   
  {/* <MDBCol>
 
  {news.articles ? news.articles.map((data,index)=> {
      console.log(data)
      return (
          <div>
      
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={data.urlToImage} waves />
        <MDBCardBody>
          <MDBCardTitle>{data.title}</MDBCardTitle>
          <MDBCardText>
            {data.description}
          </MDBCardText>
          <MDBBtn href={data.url}>MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
     
      </div>
      )
  }): console.log('')}
  

    </MDBCol> */}

    {news.articles ?
    <Carousel>
  <Carousel.Item>
    <a href={news.articles[0].url}><img
      className="d-block w-100"
      src={news.articles[0].urlToImage}
      alt="First slide"
    /></a>
    <Carousel.Caption>
    <a href={news.articles[0].url}> <h3 >{news.articles[0].title}</h3></a>
      <p>{news.articles[0].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href={news.articles[1].url}><img
      className="d-block w-100"
      src={news.articles[1].urlToImage}
      alt="Third slide"
    />
</a>
    <Carousel.Caption>
    <a href={news.articles[1].url}> <h3 >{news.articles[1].title}</h3></a>
    <p>{news.articles[1].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href={news.articles[2].url}><img
      className="d-block w-100"
      src={news.articles[2].urlToImage}
      alt="Third slide"
    />
</a>
    <Carousel.Caption>
    <a href={news.articles[2].url}> <h3 >{news.articles[2].title}</h3></a>
    <p>{news.articles[2].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href={news.articles[3].url}><img
      className="d-block w-100"
      src={news.articles[3].urlToImage}
      alt="Forth slide"
    />
</a>
    <Carousel.Caption>
    <a href={news.articles[3].url}> <h3 >{news.articles[3].title}</h3></a>
    <p>{news.articles[3].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel>

: console.log('')}
   </div>
    );
  }
}
