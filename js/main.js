function catagoryFun() {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/products/categories").then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        });
    });
}
function categoryList() {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/products/category-list").then((res) => {
          resolve(res);
        }).catch((res) => {
          reject(res);
      });
    });
}
function ProductCategory() {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/products/category/smartphones").then((res) => {
            resolve(res);
        }).catch((res) => {
            reject(res);
        });
    })
}


catagoryFun()
    .then((value) => {
    console.log(value.url);
    return categoryList();
    }).then((returnR) => {
    console.log(returnR.url);
    return ProductCategory();
    }).then((ReturnValue) => {
          console.log(ReturnValue.url);
    }).catch((value) => {
    console.log(value);
    
});