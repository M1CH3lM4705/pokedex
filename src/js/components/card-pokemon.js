const card = (name, image, types) => 
    `<div class="card">
          <h2 class="card-title capitalized">${name}</h2>
          <img src="${image}" loading="lazy" alt="${name}">
          <p class="card-desc">${types}</p>
    </div>`
    
export default card