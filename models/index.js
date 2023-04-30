// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

// A Product belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: 'product_id', // The foreign key in the Product model
});

// A Tag belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediate model
  foreignKey: 'tag_id', // The foreign key in the Tag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
