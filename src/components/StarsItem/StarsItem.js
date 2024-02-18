function StarsItem(props) {
    const { rate } = props

    const renderStars = () => {
      const stars = [false, false, false, false, false]
      for (let i = 0; i < Math.floor(rate); i++) {
        stars[i] = true
      }
      console.log(stars)
  
      return stars.map((isFilled, index) => (
        <span
          key={index}
          className={`fa fa-star ${isFilled ? 'active' : ''}`}
        ></span>
      ))
    }
  
    return (
      <div className="rate">
        {
            renderStars()
        }
      </div>
    )
  }
  
  export default StarsItem;
  