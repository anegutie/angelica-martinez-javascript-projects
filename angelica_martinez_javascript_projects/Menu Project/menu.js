const menu = [
    {
      id: 1,
      title: "French Fries",
      category: "Appetizers",
      price: 7.99,
      img: "./images/item-1.jpeg",
      desc: `Fresh cut daily, locally grown potatoes, deep fried in grapeseed oil. Signature classic crispy skinny fries.`,
    },
    {
      id: 2,
      title: "Jolly Poppers",
      category: "Appetizers",
      price: 8.99,
      img: "./images/item-2.jpeg",
      desc: `Zesty poppers filled with chef's choice three cheese fusion. Crusted with house made breadcrumbs.`,
    },
    {
      id: 3,
      title: "Hot Wings",
      category: "Appetizers",
      price: 10.99,
      img: "./images/item-3.jpeg",
      desc: `Organic and local free range chicken. Topped with classic spicy buffalo sauce and served with celery and carrots.`,
    },
    {
      id: 4,
      title: "BLT",
      category: "Lunch",
      price: 12.99,
      img: "./images/item-4.jpeg",
      desc: `Bacon. Lettuce. Tomatoes. Served on your choice of wheat or sourdough bread. Side fries or macaroni included.`,
    },
    {
      id: 5,
      title: "Chicken Caesar",
      category: "Lunch",
      price: 13.99,
      img: "./images/item-5.jpeg",
      desc: `Local free range chicken served with fresh parmesan, romaine lettuce, and house made caesar sauce.`,
    },
    {
      id: 6,
      title: "Beef Skillet",
      category: "Lunch",
      price: 16.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Steak Dinner",
      category: "Dinner",
      price: 26.99,
      img: "./images/item-7.jpeg",
      desc: `Local grass fed beef seared in fresh butter and herbs served on a skillet with seasonal veggies. `,
    },
    {
      id: 8,
      title: "Meaty Special",
      category: "Dinner",
      price: 18.99,
      img: "./images/item-8.jpeg",
      desc: `Simplistic and modern. Prime cut steak served with fresh baked herb bread and a cheesy spinach side. `,
    },
    {
      id: 9,
      title: "Veggie Delight",
      category: "Dinner",
      price: 17.99,
      img: "./images/item-9.jpeg",
      desc: `Vegetarian dream dinner. Assorted veggie lasagna slathered in zesty house made tomato sauce and locally supplied cheeses.`,
    },/*
    {
      id: 10,
      title: "Pure Pleasure",
      category: "Dessert",
      price: 12.99,
      img: "./images/item-10.jpeg",
      desc: `Just the right amount of bitter and sweet. Classic tiramisu with a fruity twist. `,
    },*/
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }