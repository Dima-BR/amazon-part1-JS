export const products = [
    {
      "id": 1,
      "brand": "Brandima",
      "sale_badge": true,
      "name": {
        "title": "Lounge Tunic / Black",
        "description": "Indulge in comfort and style with our Lounge Tunic in timeless black. Crafted for relaxation and versatility, this tunic embodies effortless elegance for both casual lounging and chic outings. Made from a luxurious blend of soft fabrics, it drapes gracefully, offering a cozy yet sophisticated silhouette."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["woman 1.1", "tunic 1.2"]
      },
      "price": {
        "regular": 100.00,
        "discounted": 50.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 50,
        "backorder_allowed": false
      },
      "images": {
        "main": "https://i.ibb.co/89gbYKd/img-1.jpg",
        "hover":"https://i.ibb.co/f4GgbWB/img2.jpg",
        "additional": ["https://i.ibb.co/f4GgbWB/img2.jpg", "https://i.ibb.co/89gbYKd/img-1.jpg"]
      },
      "dimensions": {
        "weight": 0.5,
        "size": "Large",
        "color": "Black"
      },
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.5,
        "reviews": [
          {"user": "User1", "rating": 4, "comment": "Good product."},
          {"user": "User2", "rating": 5, "comment": "Excellent quality."}
        ]
      }
    },
    {
      "id": 2,
      "name": {
        "title": "Lounge Tunic / Blue",
        "description": "Designed with simplicity in mind, the Lounge Tunic features a sleek, minimalist design, accentuated by its rich black hue. Its loose fit ensures unrestricted movement and supreme comfort, while its longer length adds an extra layer of coziness. Whether you're unwinding at home or stepping out for a casual gathering, this tunic effortlessly blends comfort with understated sophistication."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["women 2.1", "tunic 2.2"]
      },
      "price": {
        "regular": 110.00,
        "discounted": 89.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/0QXf21r/img3.jpg",
        "hover":"https://i.ibb.co/X8JcpsT/img4.jpg",
        "additional": ["https://i.ibb.co/X8JcpsT/img4.jpg", "https://i.ibb.co/0QXf21r/img3.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brandy",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 3,
      "name": {
        "title": "Lounge Tunic / Cream",
        "description": "Pair it with your favorite leggings for a relaxed day at home, or dress it up with skinny jeans and heels for an effortlessly chic ensemble. With its versatility and timeless appeal, the Lounge Tunic in black is a wardrobe essential that seamlessly transitions from day to night, ensuring you look and feel fabulous wherever you go."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 20.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/3YJYyrp/img5.jpg",
        "hover":"https://i.ibb.co/mXn7zF7/img6.jpg",
        "additional": ["https://i.ibb.co/3YJYyrp/img5.jpg", "product2_additional_image2.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brande",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 4,
      "name": {
        "title": "Sonia Skirt",
        "description": "The Sonia Skirt features a flattering A-line cut that accentuates your curves while providing comfort and ease of movement. Made from high-quality fabric, it drapes gracefully, exuding an air of refinement wherever you go. Its midi length adds a touch of sophistication, making it perfect for both professional settings and special occasions."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["woman 2.1", "skirt 2.2"]
      },
      "price": {
        "regular": 120.49,
        "discounted": 79.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/pfkRTkV/img7.jpg",
        "hover":"https://i.ibb.co/wpyLWxC/img8.jpg",
        "additional": ["product2_additional_image1.jpg", "product2_additional_image2.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 5,
      "name": {
        "title": "Wide Pant",
        "description": "Versatile and easy to style, the Wide Pant transitions seamlessly from day to night and from casual to formal occasions. Pair them with a fitted blouse or a tailored blazer for a polished office ensemble, or dress them down with a casual tee and sneakers for a laid-back weekend look. Whether you're running errands, attending meetings, or meeting friends for brunch, the Wide Pant effortlessly combines comfort and style for any occasion."
      },
      "category": {
        "main": "Main Category 5",
        "subcategories": ["woman 2.1", "Pant 2.2"]
      },
      "price": {
        "regular": 66.49,
        "discounted": 40.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/pb4LDJL/img9.jpg",
        "hover":"https://i.ibb.co/XY4GtW6/img10.jpg",
        "additional": ["https://i.ibb.co/pb4LDJL/img9.jpg", "https://i.ibb.co/XY4GtW6/img10.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "white"
      },
      "brand": "Brandi",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 6,
      "name": {
        "title": "Haori Jacket",
        "description": "Crafted with meticulous attention to detail, the Haori Jacket features a relaxed, open-front design with wide sleeves and a flowing silhouette. Made from luxurious fabrics such as silk or cotton, it drapes effortlessly, enveloping you in comfort and style. Its lightweight construction makes it an ideal layering piece for any season, adding a touch of refinement to your ensemble."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["women 2.1", "Jacket 2.2"]
      },
      "price": {
        "regular": 15.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/02XrCHD/img11.jpg",
        "hover":"https://i.ibb.co/DDpf1K4/img12.jpg",
        "additional": ["https://i.ibb.co/02XrCHD/img11.jpg", "https://i.ibb.co/DDpf1K4/img12.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "gray"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 7,
      "name": {
        "title": "Wide Pant / Blue",
        "description": "Versatile and easy to style, the Wide Pant transitions seamlessly from day to night and from casual to formal occasions. Pair them with a fitted blouse or a tailored blazer for a polished office ensemble, or dress them down with a casual tee and sneakers for a laid-back weekend look. Whether you're running errands, attending meetings, or meeting friends for brunch, the Wide Pant effortlessly combines comfort and style for any occasion."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["woman 2.1", "pant 2.2"]
      },
      "price": {
        "regular": 35.49,
        "discounted": 16.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/JR7JL9d/img13.jpg",
        "hover":"https://i.ibb.co/VwXWwSK/img14.jpg",
        "additional": ["product2_additional_image1.jpg", "product2_additional_image2.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 8,
      "name": {
        "title": "Jane Skirt",
        "description": "Designed for both casual and formal occasions, the Jane Skirt effortlessly transitions from day to night. Pair it with a fitted blouse and heels for a sophisticated office ensemble, or dress it down with a cozy sweater and ankle boots for a chic weekend look. Whether you're heading to the office, meeting friends for brunch, or enjoying a night out on the town, the Jane Skirt ensures you look effortlessly stylish and put-together."
      },
      "category": {
        "main": "clothing",
        "subcategories": ["woman 2.1", "skirt 2.2"]
      },
      "price": {
        "regular": 110.49,
        "discounted": 88.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/N6h134n/img15.jpg",
        "hover":"https://i.ibb.co/n3LQPcX/img16.jpg",
        "additional": ["https://i.ibb.co/N6h134n/img15.jpg", "https://i.ibb.co/n3LQPcX/img16.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "black"
      },
      "brand": "Branyi",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 9,
      "name": {
        "title": "Product 8",
        "description": "Description of Product 8"
      },
      "category": {
        "main": "Main Category 8",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 98.49,
        "discounted": 60.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/5h9VVCy/img17.jpg",
        "hover":"https://i.ibb.co/QHLNW1f/img18.jpg",
        "additional": ["https://i.ibb.co/5h9VVCy/img17.jpg", "https://i.ibb.co/QHLNW1f/img18.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 10,
      "name": {
        "title": "Product 8",
        "description": "Description of Product 8"
      },
      "category": {
        "main": "Main Category 8",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 15.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/s9Jy5L5/img19.jpg",
        "hover":"https://i.ibb.co/kGCqj9j/img20.jpg",
        "additional": ["https://i.ibb.co/kGCqj9j/img20.jpg", "product2_additional_image2.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 11,
      "name": {
        "title": "Product 8",
        "description": "Description of Product 8"
      },
      "category": {
        "main": "Main Category 8",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 15.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/stjhfYX/img21.jpg",
        "hover":"https://i.ibb.co/tLjvxSX/img22.jpg",
        "additional": ["product2_additional_image1.jpg", "https://i.ibb.co/tLjvxSX/img22.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 12,
      "name": {
        "title": "Product 8",
        "description": "Description of Product 8"
      },
      "category": {
        "main": "Main Category 8",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 15.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/Nty3pWC/img23.jpg",
        "hover":"https://i.ibb.co/7g2tLVc/img24.jpg",
        "additional": ["https://i.ibb.co/Nty3pWC/img23.jpg", "https://i.ibb.co/7g2tLVc/img24.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
    {
      "id": 13,
      "name": {
        "title": "Product 8",
        "description": "Description of Product 8"
      },
      "category": {
        "main": "Main Category 8",
        "subcategories": ["Subcategory 2.1", "Subcategory 2.2"]
      },
      "price": {
        "regular": 15.49,
        "discounted": 12.99,
        "currency": "USD"
      },
      "availability": {
        "in_stock": true,
        "quantity": 30,
        "backorder_allowed": true
      },
      "images": {
        "main": "https://i.ibb.co/VWBKZR9/img25.jpg",
        "hover":"https://i.ibb.co/PTC2ML3/img26.jpg",
        "additional": ["https://i.ibb.co/VWBKZR9/img25.jpg", "https://i.ibb.co/PTC2ML3/img26.jpg"]
      },
      "dimensions": {
        "weight": 0.8,
        "size": "Medium",
        "color": "Blue"
      },
      "brand": "Brand B",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "ratings": {
        "average": 4.0,
        "reviews": [
          {"user": "User3", "rating": 3, "comment": "Okay product."},
          {"user": "User4", "rating": 5, "comment": "Great value for money."}
        ]
      }
    },
]