import { Link } from 'react-router-dom'

const NewsItem = ({ title, description, imageUrl, newsUrl, date, author, source }) => {
  return (
    <div className="my-3">
      <div className="card h-100">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{!title ? "Focus Moved...: New India Coach Finds Flaw In Rohit And Co's Batting" : title}</h5>
          <p className="card-text">{description ? "Sporting goods retailer Decathlon to invest $111 million in India expansion plan" : description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <Link to={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">See the news</Link>
        </div>
      </div>
    </div>
  )
}
export default NewsItem
