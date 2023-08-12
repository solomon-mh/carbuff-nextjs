const sql = require("better-sqlite3");
const db = sql("cars.db");

const sampleCars = [
  {
    slug: "tesla-model-s",
    carName: "Tesla Model S",
    imagePath: "/assets/car-img.jpg",
    review:
      "The Tesla Model S is a sleek and powerful electric sedan with impressive range and cutting-edge technology.",
    creator: "John Doe",
    creator_email: "john.doe@example.com",
  },
  {
    slug: "ford-mustang",
    carName: "Ford Mustang",
    imagePath: "/assets/car-img3.jpg",
    review:
      "The Ford Mustang is an iconic American muscle car known for its performance and stylish design.",
    creator: "Jane Smith",
    creator_email: "jane.smith@example.com",
  },
  {
    slug: "chevrolet-camaro",
    carName: "Chevrolet Camaro",
    imagePath: "/assets/car-img4.jpg",
    review:
      "The Chevrolet Camaro offers a thrilling driving experience with its powerful engines and aggressive styling.",
    creator: "Alice Johnson",
    creator_email: "alice.johnson@example.com",
  },
  {
    slug: "bmw-3-series",
    carName: "BMW 3 Series",
    imagePath: "/assets/car-img6.jpg",
    review:
      "The BMW 3 Series is a luxury sedan that combines performance, comfort, and advanced technology.",
    creator: "Bob Brown",
    creator_email: "bob.brown@example.com",
  },
  {
    slug: "audi-a4",
    carName: "Audi A4",
    imagePath: "/assets/car-img6.jpg",
    review:
      "The Audi A4 is a compact executive car that offers a premium interior, advanced features, and a smooth ride.",
    creator: "Carol White",
    creator_email: "carol.white@example.com",
  },
  {
    slug: "mercedes-benz-c-class",
    carName: "Mercedes-Benz C-Class",
    imagePath: "/assets/car-img5.jpg",
    review:
      "The Mercedes-Benz C-Class is a luxury sedan known for its elegant design, comfortable interior, and advanced technology.",
    creator: "David Green",
    creator_email: "david.green@example.com",
  },
  {
    slug: "audi-q7",
    carName: "Audi Q7",
    imagePath: "/assets/car-img.jpg",
    review:
      "The Audi Q7 is a spacious and luxurious SUV offering a smooth ride, advanced safety features, and a high-tech interior.",
    creator: "Emma Blue",
    creator_email: "emma.blue@example.com",
  },
  {
    slug: "lexus-rx",
    carName: "Lexus RX",
    imagePath: "/assets/car-img4.jpg",
    review:
      "The Lexus RX is a stylish and comfortable luxury SUV with a reputation for reliability and a smooth, quiet ride.",
    creator: "Frank Silver",
    creator_email: "frank.silver@example.com",
  },
  {
    slug: "toyota-corolla",
    carName: "Toyota Corolla",
    imagePath: "/assets/car-img3.jpg",
    review:
      "The Toyota Corolla is a reliable and fuel-efficient compact car with a reputation for longevity and low cost of ownership.",
    creator: "Grace Black",
    creator_email: "grace.black@example.com",
  },
  {
    slug: "honda-civic",
    carName: "Honda Civic",
    imagePath: "/assets/car-img3.jpg",
    review:
      "The Honda Civic is a popular compact car known for its fuel efficiency, reliability, and sporty design.",
    creator: "Henry White",
    creator_email: "henry.white@example.com",
  },
  {
    slug: "mazda-3",
    carName: "Mazda 3",
    imagePath: "/assets/car-img.jpg",
    review:
      "The Mazda 3 offers a sporty driving experience, stylish design, and a well-appointed interior.",
    creator: "Irene Purple",
    creator_email: "irene.purple@example.com",
  },
  {
    slug: "subaru-outback",
    carName: "Subaru Outback",
    imagePath: "/assets/car-img.jpg",
    review:
      "The Subaru Outback is a versatile crossover with standard all-wheel drive, great for outdoor adventures and everyday driving.",
    creator: "Jack Yellow",
    creator_email: "jack.yellow@example.com",
  },
  {
    slug: "volvo-xc90",
    carName: "Volvo XC90",
    imagePath: "/assets/car-img6.jpg",
    review:
      "The Volvo XC90 is a luxury SUV with a focus on safety, advanced technology, and Scandinavian design.",
    creator: "Kathy Red",
    creator_email: "kathy.red@example.com",
  },
  {
    slug: "nissan-altima",
    carName: "Nissan Altima",
    imagePath: "/assets/car-img.jpg",
    review:
      "The Nissan Altima is a mid-size sedan with a comfortable interior, advanced safety features, and efficient performance.",
    creator: "Liam Orange",
    creator_email: "liam.orange@example.com",
  },
  {
    slug: "kia-sorento",
    carName: "Kia Sorento",
    imagePath: "/assets/car-img4.jpg",
    review:
      "The Kia Sorento is a mid-size SUV offering a spacious interior, modern technology, and a comfortable ride.",
    creator: "Mia Brown",
    creator_email: "mia.brown@example.com",
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL,
    carName TEXT NOT NULL,
    imagePath TEXT NOT NULL,
    review TEXT NOT NULL,
    creator TEXT NOT NULL, 
    creator_email TEXT NOT NULL
  )
  `
).run();

function initData() {
  const stmt = db.prepare(`
    INSERT INTO cars (slug, carName, imagePath, review, creator, creator_email) VALUES (
      @slug,
      @carName,
      @imagePath,
      @review,
      @creator,
      @creator_email
    )
  `);

  for (const car of sampleCars) {
    stmt.run(car);
  }
}

// Initialize the database with sample data
initData();
