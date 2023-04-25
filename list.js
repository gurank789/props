import React from "react";
import ProductCard from "./card.js";


function App() {
    const ProductList = [
        {
            productId: '1',
            productPic:'https://rukminim1.flixcahttps://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.pnrt.com/image/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'Adidas',
            productDescription:'A pair of running shoes',
            price: 'Rs-5000',
            rating: 4
    
        },
        {
            productId: '2',
            productPic:'https://rukminim1.flihttps://rukminim1.flixcart.com/image/612/612/knt7zbk0/shoe/m/r/r/7-5g-845-campus-gry-d-gry-original-imag2eynkpzvz6tf.jpeg?q=70xcart.com/image/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'Puma',
            productDescription:'A pair of running shoes',
            price: 'Rs-5000',
            rating: 4
    
        },
        {
            productId: '3',
            productPic:'https://rukminim1https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/i/z/h/9-rpd169-white-rapidbox-white-original-imaggd7qumgybqe9.jpeg?q=70.flixcart.com/image/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'NIKE',
            productDescription:'A pair of running shoes',
            price: 'Rs-6000',
            rating: 4
    
        },
        {
            productId: '4',
            productPic:'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'Adidas',
            productDescription:'A pair of running shoes',
            price: 'Rs-3000',
            rating: 4
    
        },
        {
            productId: '5',
            productPic:'https://rukminim1.flixcart.com/imhttps://rukminim1.flixcart.com/image/612/612/ku5ufm80/shoe/4/g/a/10-bg80-elevarse-white-original-imag7ced5ezeayh7.jpeg?q=70age/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'Adidas',
            productDescription:'A pair of running shoes',
            price: 'Rs-5000',
            rating: 4
    
        },
        {
            productId: '6',
            productPic:'https://rukminim1.flixcahttps://rukminim1.flixcart.com/image/612/612/xif0q/shoe/e/3/c/9-cg-248-9-campus-wine-blk-original-imaggp8rmvuxeaqt.jpeg?q=70rt.com/image/612/612/xif0q/shoe/x/n/9/10-atg-496-10-action-white-original-imaghfmkthjzrayc.jpeg?q=70',
            productName: 'Shoes',
            brand:'Adidas',
            productDescription:'A pair of running shoes',
            price: 'Rs-5000',
            rating: 4
    
        },
    ];
    return (
        <div className="App">
          <h1>My Online Store</h1>
          <ProductList products={ProductList} />
        </div>
      );
    }
    
    export default App;