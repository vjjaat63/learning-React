import Card from "./card";

const foodData = [
  {
    id: 1,
    name: "Burger",
    price: 120,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 2,
    name: "Pizza",
    price: 250,
    image: "https://images.unsplash.com/photo-1548365328-9c8c6f3c5a6a"
  },
  {
    id: 3,
    name: "Sandwich",
    price: 90,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  },
  {
    id: 4,
    name: "Pasta",
    price: 180,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
  },
  {
    id: 5,
    name: "French Fries",
    price: 70,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
  },
  {
    id: 6,
    name: "Noodles",
    price: 140,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    id: 7,
    name: "Fried Rice",
    price: 150,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    id: 8,
    name: "Chicken Curry",
    price: 220,
    image: "https://images.unsplash.com/photo-1604908177522-0406b6c8a58f"
  },
  {
    id: 9,
    name: "Paneer Butter Masala",
    price: 200,
    image: "https://images.unsplash.com/photo-1668236543090-82d07f4b61db"
  },
  {
    id: 10,
    name: "Biryani",
    price: 260,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
  },
  {
    id: 11,
    name: "Dosa",
    price: 80,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 12,
    name: "Idli",
    price: 60,
    image: "https://images.unsplash.com/photo-1626509653291-3c3b2f4e0d30"
  },
  {
    id: 13,
    name: "Samosa",
    price: 30,
    image: "https://images.unsplash.com/photo-1601050690664-3c2d0f65e9d2"
  },
  {
    id: 14,
    name: "Pav Bhaji",
    price: 110,
    image: "https://images.unsplash.com/photo-1626776871352-1a4e6f98b5eb"
  },
  {
    id: 15,
    name: "Chole Bhature",
    price: 160,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf2c38d5"
  },
  {
    id: 16,
    name: "Ice Cream",
    price: 70,
    image: "https://images.unsplash.com/photo-1505253216365-8b5bb1e6c3a2"
  },
  {
    id: 17,
    name: "Cake",
    price: 180,
    image: "https://images.unsplash.com/photo-1542826438-7b92c98f1d6b"
  },
  {
    id: 18,
    name: "Donut",
    price: 60,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  },
  {
    id: 19,
    name: "Hot Dog",
    price: 100,
    image: "https://images.unsplash.com/photo-1612392061785-3c13c8a4a5d4"
  },
  {
    id: 20,
    name: "Taco",
    price: 130,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
  }
];


export default function Cards(){
   
    return (
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"10px"}}>

        {foodData.map((food)=>(
        <div key = {food.id} style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            <Card food = {food}></Card>
        </div>
        ))}

        
    
        </div>
    )
}