import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // const user ={
// // //   // name: "abel demelash" , 
// // //   name: prompt('enter a name'),
// // //   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
// // //   ImageSize: 90
// // // }

// // const products = [
// //   {title:'Cabbage' , isFruit: false ,id:1},
// //   {title:'Garlic' , isFruit: false , id:2},
// //   {title:'Apple' , isFruit: true , id:3}
// // ];

// // // let content;
// // // if (isLoggedIn){
// // //   content = <Adminpanel/>
// // // }
// // // else{
// // //   content = <LoginForm/>
// // // }
// // // return (
// // //   <div>
// // //     {content}
// // //     {/* When you don’t need the else branch, you can also use a shorter logical && syntax: */}
// // //     {isLoggedIn && <Adminpanel/>}
// // //   </div>
// // // )
// // // return(
// // //   <div>
// // //   {/* If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX: */}
// // //   {isLoggedIn ? (
// // //     <Adminpanel/>
// // //   ) : (<LoginForm/>)}
// // //   </div>
// // // )
// // // // function MyButton(){
// // // //   return(
// // // //     <button style={{color: 'greenyellow' , backgroundColor:'brown' , position:'relative'}}> press here</button>
// // // //   );
// // // // }
// // // // // export default MyButton;
// // // // // function Action() {
// // // // //   return (alert("button clicked"))
// // // // // }

// // // // function AboutPage(){
// // // //   return (
// // // //     <>
// // // //     <h1>About</h1>
// // // //     <p>Helo there.<br /> How do you do?</p>
// // // //     <h1>
// // // //       {User.name}
// // // //     </h1>
// // // //     </>
// // // //   )
// // // // }
// // // // export default function MyApp(){
// // // //   return (
// // // //     <div style={{backgroundcolor:'red'}}>
// // // //       <h1> hello from the other page</h1>
// // // //       <MyButton/>
// // // //       <AboutPage/>
// // // //       <img className="avatar"
// // // //       src={user.imageUrl}/>
// // // //     </div>
// // // //   )
// // // // }
// // // export default function Profile(){
// // //   return (
// // //     <>
// // //     <h1>{user.name}</h1>
// // //     <img className='avatar' src={user.imageUrl} alt={'photo of' + user.name} style={ { width: user.ImageSize , height:user.ImageSize }}></img>
// // //     </>
// // //   )
// // // }
// // export default function ShoppingList(){
// //   const listItems = products.map(product =>
// //     <li key={product.id} 
// //     style={{color:product.isFruit ? 'magenta':'darkgreen'}}>
// //       {product.title}
// //     </li>
// //   )
// //   const [count /*urrent state*/ , setCount /* function*/] = useState(0);

// //   function handleClick(){
// //     if(count >10){
// //       setCount(count === 0)
// //     }
// //     else{
// //       setCount(count + 1)
// //     }
// //   }

// //   return(

// //     <div>
// //           <ul>{listItems}</ul>
// //           <h1>hooked counters</h1>
// //           <MyButton count={count} onClick={handleClick}/>
// //           <br/>
// //           < MyButton count={count} onClick={handleClick}/>
// //     </div>
// //   )
// // }

// // // Responding to events 
// // // function MyButton(){
// // //   function handleClick(){
// // //     alert('button clicked!!')
// // //   }
// // //   return(
// // //     <button onClick={handleClick}> click me</button>
// // //   )
// // // }

// // // // Updating the screen 
// // // function MyButton(){
// // //   const [count /*urrent state*/ , setCount /* function*/] = useState(0);

// // //   function handleClick(){
// // //     if(count >10){
// // //       setCount(count == 0)
// // //     }
// // //     else{
// // //       setCount(count + 1)
// // //     }
// // //   }
// // //   return(
// // //     <button onClick={handleClick}>
// // //       clicked {count} times
// // //     </button>
// // //   )
// // // }

// // // using hooks
// // function MyButton({count , onClick} ){ /*props mthod of passing values*/

// //   return(
// //     <button onClick={onClick}>
// //       clicked {count} times
// //     </button>
// //   )
// // }



// function Square({value , onSquareClick}) {

//   // const[value , setValue] = useState(null); 
//   // function handleClick(){
//   //   setValue('X');
//   //   }

//   return (
//     <button className="square" onClick={onSquareClick}>{value}</button>
//   )
// }

// export default function Board(){
//   const [xIsNext , setXIsNext] = useState(true);
//   const [squares , setSquares] = useState(Array(9).fill(null));
//   /*
// Immutability is a key concept in programming,
//  especially when working with state management in frameworks like React.
//  It means that instead of modifying the existing data directly
// , we create a copy and modify the copy. Here's why immutability is so important:*/

//   function handleClick(i){

//     if (squares[i] || calcWinner(squares)){
//       return;
//     }
//     const nextSquares = squares.slice(); // slice creates  a copy of the square array instead of modifying the existing array.
//     // squares[0] = 'X'; // Mutating the original array directly.
//     // // Now `squares` is ["X", null, null, null, null, null, null, null, null];

//     // nextSquares[i] = "X";
//     // setSquares(nextSquares);
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   const winner = calcWinner(squares);
//   let status;
//   if(winner){
//     status = "winner:" + winner;
//   } else {
//     status = "next player : " + (xIsNext ? 'X':'O');
//   }


//   return (
//   <>
//   <div className = "status">{status}</div>
//   <div className="board-row">
//     <Square value={squares[0]} onSquareClick={ () => handleClick(0)}/>
//     <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
//     <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>

//   </div>
//   <div className="board-row">
//     <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
//     <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
//     <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
//   </div>
//   <div className="board-row">
//     <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
//     <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
//     <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
//   </div>
//   </>
//   )
// }

// function calcWinner(squares){
//   const lines =[
//         [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++){
//     const [a , b , c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//       return squares[a];
//     }
//   }
//   return null;
// }


//  product project start

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">
//         {category}
//       </th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? product.name :
//     <span style={{ color: 'red' }}>
//       {product.name}
//     </span>;

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// function ProductTable({ products , filterText , inStockOnly}) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {

//     if (
//       product.name.toLowerCase().indexOf(
//         filterText.toLowerCase()
//       ) === -1
//       ){
//         return;
//       }
//       if (inStockOnly && !product.stocked){
//         return;
//       }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar({filterText , inStockOnly , onFilterTextChange , onInStockOnlyChange}) {
//   return (
//     <form>
//       <input type="text" 
//       value={filterText} 
//       placeholder="Search..."  
//       style={{backgroundColor:"greenyellow"}}
//       onChange={(e) => onFilterTextChange(e.target.value)}/>
//       <label>
//         <input type="checkbox" 
//         checked = {inStockOnly}
//         onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
//         {' '}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// function FilterableProductTable({ products }) {
//   const [filterText , setFilterText] = useState('');
//   const [inStockOnly , setInStockOnly] = useState(false);
//   return (
//     <div>
//       <SearchBar 
//       filterText = {filterText}
//       inStockOnly = {inStockOnly}
//       onFilterTextChange = {setFilterText}
//       onInStockOnlyChange = {setInStockOnly}/>
//       <ProductTable products={products} 
//       filterText = {filterText}
//       inStockOnly = {inStockOnly}/>
//     </div>
//   );
// }

// const PRODUCTS = [
//   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
// ];

// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }

//  product project end

function Greeting({name}) {
  return(
    <h1>Hello {name}</h1>
  );
}

export default function App () {
  const [name , setName ] = useState('');

  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
    <form>
    <input type="text" 
    value={name}
    onChange={handleChange}
    placeholder=" Enter Name ..."
    ></input>
    <Greeting name={name}/>
    </form>
    </div>)
}