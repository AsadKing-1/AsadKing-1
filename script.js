const sideMenu = document.querySelector('aside');
const btnTheme = document.querySelector('#menu-btn');
const Closebtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
btnTheme.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});
Closebtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  
  themeToggler.querySelector('span:nth-child(1').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2').classList.toggle('active');
});


Orders.forEach(Orders => {
  const tr = document.createElement('tr');
  const trContent = `<td>${order.productName}</td>
                     <td>${order.productNumber}</td>
                     <td>${order.paymentStatus}</td>
                     <td class="warning">${order.shopping === 'Decilined'? 'danger': order.shopping === 'pending' ? 'warning' : 'primary' }</td>
                     <td class="primary">${order.productName}</td>
                     `
      tr.innerHTML = trContent;
      document.querySelector('table tbody').appendChild(tr);
})



