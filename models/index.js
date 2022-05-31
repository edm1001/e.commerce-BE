// target the models
const Category = require('./Category');
const Tag = require('./Tag');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
//Category contains the products
Category.hasMany(Product, {
    foreignKey: "category_id"
})
//Find Product inside Tags and category
Product.belongsTo(Category, {
    foreignKey: "category_id"
  });//category
Product.belongsToMany(Tag,{
    through: ProductTag,
    as: "tags",
    foreignKey: "product_id"
});//Tags
Tag.belongsToMany(Product,{
    through: ProductTag,
    as: "products",
    foreignKey: "tag_id"
});

module.exports = {
    Category,
    Product,
    ProductTag,
    Tag
};
