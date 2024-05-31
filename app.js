const div = document.querySelector('div');


// Promise Area
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card " style="width: 15rem;">
  <img width="200" src="${item.image}" alt="Product-image">
  <div class="card-body d-flex justify-content-center text-center align-items-center">
        <h6>${item.title}</h6>
        <h6>Price : ${item.price}</h6>
  </div>
</div>
        `
    })
}).catch((err)=>{
    console.log(err);
})
// Promise Area

{/* <p class="card-text">${item.description}</p> */}