const services = 
   [
    {
      id: 1,
      head: null,
      name: 'Проф.осмотр',
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: 'Хирургия',
      node: 1,
      price: 0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: 'Удаление зубов',
      node: 1,
      price: 0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: 'Удаление зуба',
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: 'Удаление 8го зуба',
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: 'Удаление осколка зуба',
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: 'Хирургические вмешательства',
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: 'Имплантация зубов',
      node: 1,
      price: 0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: 'Коронка',
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: 'Слепок челюсти',
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ]


const addServices = () => {
  const rootServices = services.filter(service => service.head === null);
  rootServices.sort((a, b) => a.sorthead - b.sorthead);

  rootServices.forEach((rootService) => {
    const cardStyleRoot = rootService.node ===0 && rootService.head != null ? 'margin-left: 50px;' : ''
    row.innerHTML += `
      <div class="card" style="${cardStyleRoot}">
        <h2>${rootService.name}</h2>
        ${rootService.price > 0 ? `<p>Price: ${rootService.price}</p>` : ''}
        <p>Sort: ${rootService.sorthead}</p>
      </div>`;
      otherServices(rootService.id);
  });
};
const otherServices = (parentId) => {
  const childServices = services.filter(service => service.head === parentId)
  childServices.sort((a,b)=> a.sorthead - b.sorthead)
  childServices.forEach((childService) => {
    const cardStyle = childService.node ===0 && childService.head != null ? 'margin-left: 50px;' : ''
    row.innerHTML += `
      <div class="card " style="margin-left: 20px; ${cardStyle}">
        <h2>${childService.name}</h2>
        ${childService.price > 0 ? `<p>Price: ${childService.price}</p>` : ''}
        <p>Sort: ${childService.sorthead}</p>
      </div>`;
    otherServices(childService.id);
  });
};

const row = document.getElementById('row');
addServices();

//Функция для открытия услуг при клике на иконку
const serviceOpen = document.querySelectorAll('.service');
serviceOpen.forEach(function (serOpen) {
  const btn = serOpen.querySelector('.btns-btn');
  btn.addEventListener('click', function () {
    serOpen.classList.toggle('show-text');
  });
});

  
 