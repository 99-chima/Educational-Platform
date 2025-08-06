import { useContext } from "react";
import {Card, Button, Badge} from "react-bootstrap";
import {FaStar, FaShoppingCart} from "react-icons/fa";
import { CardContext } from "./CardContext";
const CourseCard =({course}) => {
const {addtoCard} = useContext(CardContext);
const renderStars = (rating)=> {
   return Array.from({length:5}, (_, i) => (
    <FaStar key={i} color={i < rating ? "#ffb400" : "#e8e1e1"} />
   )
   )
 };
 return(
     <Card className="shadow course-card border-0 rounded-4 overflow-hidden position-relative pb-4"
     style={{
         width: "22rem",
         margin: "20px auto",
         transition: "transform 0.3s ease, box-shadow 0.3s ease",
         background: "white",
     }}
     >
         <div className="position-relative ">
             <Card.Img 
             variant="top"
             src={course.image}
             alt={course.name}
             className="img-fluid"
             style={{
                 height: "300px",
                 objectFit: "cover", 
             }}
             />
             <Badge className="position-absolute top-0 start-0 m-2 fs-6 px-2 rounded-pill shadow-sm">
                 %10 off
             </Badge>
             <Badge className="bg-secondary position-absolute top-0 end-0 m-2 fs-6 px-2 rounded-pill shadow-sm">
                 {course.Price} USD
             </Badge>
         </div>
         <Card.Body className="text-center d-flex flex-column justify-content-between px-3" style={{height: "350px",}}>
             <div>
             <Card.Title className="fs-5 fw-bold text-primary mb-1" style={{lineHeight: "1.5", }}>{course.name}</Card.Title>
             <Card.Text className="text-muted small mt-2 lh-lg" style={{lineHeight: "1.5",}}>{course.description}</Card.Text>
             <div className="d-flex justify-content-center mb-2">
                 {renderStars(course.rating || 4)}
             </div>
             <div className="text-decoration-line-through text-muted mb-2 small">
               {parseFloat(course.Price * 1.25).toFixed(2)} USD
             </div>
             </div>
             <Button onClick={() => addtoCard(course)}
             className="mt-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center ga-2 text-white"
             style={{
                 background: "linear-gradient(90deg, #0D6EFD, #00D4FF)",
                 border: "none",
             }}>
                 <FaShoppingCart />
                <span className="ms-2">Add to cart</span>
             </Button>
         </Card.Body>
     </Card>
 )
};
export default CourseCard;

