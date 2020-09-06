
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: 'Get Programming with Node.js',
      author: 'Jonathan Wexler',
      price: 32,
      coverImage: 'https://m.media-amazon.com/images/I/810taCAYmtL._AC_UL436_.jpg'},
    {
      id: 4,
      title: 'Programming TypeScript: Making Your JavaScript Applications Scale',
      author: 'Boris Cherny',
      price: 29,
      coverImage: 'https://m.media-amazon.com/images/I/914Lo09RDcL._AC_UL436_.jpg'},
    {
      id: 5,
      title: 'React Cookbook: Create dynamic web apps with React using Redux, Webpack, Node.js, and GraphQL',
      author: 'Carlos Santana Roldan',
      price: 23,
      coverImage: 'https://m.media-amazon.com/images/I/71yJ29SypNL._AC_UL436_.jpg'},
    {
      id: 6,
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      price: 28,
      coverImage: 'https://m.media-amazon.com/images/I/41p7u2kJACL._AC_UL436_.jpg'},
    {
      id: 7,
      title: 'Learning React: Functional Web Development with React and Redux',
      author: 'Alex Banks',
      price: 30,
      coverImage: 'https://m.media-amazon.com/images/I/7169mYAhsmL._AC_UL436_.jpg'},
    {
      id: 8,
      title: 'React Explained: Your Step-by-Step Guide to React',
      author: 'Zac Gordon',
      price: 25,
      coverImage: 'https://m.media-amazon.com/images/I/41KjE6umxmL._AC_UL436_.jpg'},
    {
      id: 9,
      title: 'Pro JavaScript Design Patterns: The Essentials of Object-Oriented JavaScript Programming',
      author: 'Dustin Diaz and Ross Harmes',
      price: 35,
      coverImage: 'https://m.media-amazon.com/images/I/81SjtUmw7aL._AC_UL436_.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}