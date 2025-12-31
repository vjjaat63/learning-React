function Header(){
  return (
    <div className="head">

      <img className="logo" src="https://i.pinimg.com/1200x/68/6d/c5/686dc532a1d5ba6a70057b87815eb929.jpg" alt="" />

      <div className="buts">
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
        <button>HOME</button>
        <button>BEAUTY</button>
        <button>GENZ</button>
        <button>STUDIO</button>
      </div>

      <input type="text" placeholder="Search for products,brands and more"/>
      <div className="lg">
        <a href="">Profile</a>
        <a href="">Wishlist</a>
        <a href="">Bag</a>
      </div>

    </div>
  )
};

export default Header;