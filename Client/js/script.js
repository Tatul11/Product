const url = 'http://localhost:3000/product'

fetch(url)
.then(res => {return res.json()})
.then(renderData)
.catch((err)=>console.log(err))

const container = document.querySelector('.wrapper')
console.log(container);   


function renderData(data){
  console.log(data);
      const htmlContent = data.data.data.map(elem=>{
    return `
       <div>
         <h1>${elem.name}</h1>
         <p><span>Price:</span>${elem.price}</p>
         <p><span>Category:</span>${elem.category}</p>

       </div>
      `
      }).join("")
      container.innerHTML = htmlContent
      
}
