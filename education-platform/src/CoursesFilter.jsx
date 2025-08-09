import React, { useState } from 'react';
import CoursesList from './CoursesList';
import courseData from './courses';
import { Button, Form } from 'react-bootstrap';

const CoursesPage = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); 

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredCourses = courseData.filter(course => {
    if (filter === "All") return true;
    return course.category === filter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mt-5">
      {/* Category filter buttons */}
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {["All", "Languages", "Programming", "Business", "Health"].map(category => (
          <Button
            key={category}
            onClick={() => handleFilter(category)}
            className="me-2 mb-2"
            variant={filter === category ? "primary" : "outline-primary"} // Highlight active button
          >
            {category}
          </Button>
        ))}

        {/* Price sort dropdown */}
        <Form.Select 
          onChange={handleSortChange} 
          value={sortOrder}
          className="ms-2"
          style={{ width: "200px" }}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Form.Select>
      </div>

      <CoursesList course={sortedCourses} />
    </div>
  );
};

export default CoursesPage;
